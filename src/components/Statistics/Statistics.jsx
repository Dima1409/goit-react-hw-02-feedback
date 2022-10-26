import React from "react";
import PropTypes from 'prop-types';
import {FeedbackTitle, StatisticList, StatisticItem} from './Statistics.styled'
import Notification from "components/Notification/Notification";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
        <FeedbackTitle>Statistics</FeedbackTitle>
        {!total ? <Notification message="There is no feedback"/> : <StatisticList>
            <StatisticItem>GOOD: <span>{good}</span></StatisticItem>
            <StatisticItem>NEUTRAL: <span>{neutral}</span></StatisticItem>
            <StatisticItem>BAD: <span>{bad}</span></StatisticItem>
            <StatisticItem>Total: <span>{total}</span></StatisticItem>
            <StatisticItem>Positive feedback: <span>{positivePercentage}%</span></StatisticItem>
                                   </StatisticList>}
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