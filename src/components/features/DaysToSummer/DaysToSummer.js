import React from 'react';
import styles from './DaysToSummer.scss';

const daysToSummer = () => {
  const currentTime = new Date();
  const summerBegin = new Date(
    Date.UTC(currentTime.getUTCFullYear(), 5, 21, 0, 0, 0, 0)
  );
  const summerEnd = new Date(
    Date.UTC(currentTime.getUTCFullYear(), 8, 23, 0, 0, 0, 0)
  );

  if (summerBegin.getTime() < currentTime.getTime() &&
      currentTime.getTime() < summerEnd.getTime()) {

    return null;

  } else {
    if(currentTime.getTime() >= summerEnd.getTime()) {
      summerBegin.setUTCFullYear(currentTime.getUTCFullYear()+1);
    }

    const daysToSummer = Math.round(
      (summerBegin.getTime() - currentTime.getTime()) / 1000 / 60 / 60 / 24
    );

    return (
      <div className={styles.component}>{daysToSummer} {daysToSummer == 1? 'day': 'days'} to summer !</div>
    );
  }
};

export default daysToSummer;
