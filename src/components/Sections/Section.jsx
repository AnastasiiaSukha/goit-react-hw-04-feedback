import PropTypes from 'prop-types';
import React from "react";
import { Title, Container} from './Section.styled';

const Section = ({ title, children }) => {
    return <Container>
        <Title>{title}</Title>
        {children}
    </Container>
    
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,

}
export default Section;