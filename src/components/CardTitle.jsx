import React from 'react';
import CardStars from './CardStars';
import styled from 'styled-components';

const Container = styled.div`
padding-bottom:10px;
border-bottom:1px solid gray;
margin-bottom: 10px;
`

const H3 = styled.h3`
font-size:1em;
`

const CardTitle = (props) => {
    const { title, secondaryText } = props
    return (
        <Container>
            <h1>{title}</h1>
            <CardStars />
            <H3>{secondaryText}</H3>
            <p>Lorem, ipsum dolor sit amet  ipsum corrupti natus repudiandae totam, sed suscipit sunt minima, quos quod sapiente laudantium vitae iusto. Illo.</p>
        </Container>
    );
};

export default CardTitle;