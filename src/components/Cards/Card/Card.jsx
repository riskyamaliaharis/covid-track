import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cn from "classnames";
import styles from "./Card.module.css";

const EachCard = (props) => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      component={Card}
      className={cn(styles.card, props.className)}
    >
      <CardContent>
        <Typography color="textSecondary">{props.name}</Typography>
        <Typography variant="h5">
          <CountUp
            start={0}
            end={props.value}
            duration={3}
            separator=","
          ></CountUp>
        </Typography>
        <Typography color="textSecondary">People</Typography>
        <Typography variant="body2">{props.detail}</Typography>
      </CardContent>
    </Grid>
  );
};

export default EachCard;
