import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import styles from  "./Cards.module.css";
import cx from 'classnames'
import CountUp from "react-countup";
function Cards({ data: { recovered, deaths, confirmed, lastUpdate } }) {
  if (!recovered || !confirmed || !deaths || !lastUpdate) {
    return "Loading....";
  }
  return (
    <div className={styles.container}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Numbers of active cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Numbers of recovery cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Numbers of deaths cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
