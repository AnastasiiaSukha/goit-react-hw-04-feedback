import PropTypes from 'prop-types';
import React from "react";
import { Message } from './Notification.styled';

const Notification = ({message}) => {
    return <Message>{message}</Message>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

console.log();