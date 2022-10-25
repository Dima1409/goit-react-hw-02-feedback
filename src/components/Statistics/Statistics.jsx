import React from "react";
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
        <h2 className={css.feedbackTitle}>Statistics</h2>
        <ul className={css.statisticList}>
            <li className={css.statisticItem}>GOOD: <span>{good}</span></li>
            <li className={css.statisticItem}>NEUTRAL: <span>{neutral}</span></li>
            <li className={css.statisticItem}>BAD: <span>{bad}</span></li>
            <li className={css.statisticItem}>Total: <span>{total}</span></li>
            <li className={css.statisticItem}>Positive feedback: <span>{positivePercentage}%</span></li>
        </ul>
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}

export default Statistics;