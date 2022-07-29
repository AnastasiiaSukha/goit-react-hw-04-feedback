import PropTypes from 'prop-types';
import React from "react";
import { StatList } from './Statistics.styled';


const Statistics = ({good, neutral, bad, total, percentage}) => {
    return (
        <StatList>
               <li> Good: {good}</li>
               <li> Neutral: {neutral}</li>
            <li> Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {percentage} %</li>
</StatList>
        
    )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
}


export default Statistics;