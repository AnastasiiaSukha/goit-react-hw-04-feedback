import PropTypes from 'prop-types';
import React from "react";
import { ButtonsList, Button } from './FeedbackOptions.styled';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const keys = Object.keys(options)
    return (
        <ButtonsList>
            {keys.map(key => (
                <li key={key}>
                    <Button type="button" onClick={() => onLeaveFeedback(key)} >{key}</Button>
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