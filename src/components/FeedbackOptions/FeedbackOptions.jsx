import PropTypes from 'prop-types';
import React from "react";
import { ButtonsList, Button } from './FeedbackOptions.styled';


const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ButtonsList>
            {options.map(option => (
                <li key={option}>
                    <Button type="button" onClick={() => onLeaveFeedback(option)} >{option}</Button>
                </li>
            ))}
        </ButtonsList>
    )
    
}
FeedbackOptions.protoTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;