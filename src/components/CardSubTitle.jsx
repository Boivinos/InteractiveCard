import React from 'react';
import styled from 'styled-components';

const SubContent = styled.div`
    font-size: 0.8em;
`
const ButtonContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top: 10px;
`

const SubContentButton = styled.button`
    padding:5px 15px;
    font-size: 0.8em;
    border: none;
    border-radius: 10px;
    font-size: 1em;
`


const CardSubTitle = (props) => {
    const { subTitle, subContent } = props
    return (
        <div>
            <h2>{subTitle}</h2>
            <SubContent>
                <p>{subContent}</p>
                <ButtonContainer>
                    <SubContentButton>Item 1</SubContentButton>
                    <SubContentButton>Item 2</SubContentButton>
                    <SubContentButton>Item 3</SubContentButton>
                    <SubContentButton>Item 4</SubContentButton>
                </ButtonContainer>
            </SubContent>
        </div>
    );
};

export default CardSubTitle;