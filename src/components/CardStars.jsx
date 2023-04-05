import { useState } from 'react';
import "./CardStars.css"
import styled from 'styled-components';

const Star = styled.div`
cursor: pointer;
    font-size:2em;
    margin-right: 5px;
    transition: all 0.5s;
    color: gray;
    &:hover {
        transform: scale(1.3); 
        color:gold;             
    }
`

const StarBox = styled.div`
 display: flex;
    flex-direction: row-reverse;
    justify-content: start;
    align-items:center;
`

const CardStars = () => {

    const stars = [
        { name: "s1", value: 5 },
        { name: "s2", value: 4 },
        { name: "s3", value: 3 },
        { name: "s4", value: 2 },
        { name: "s5", value: 1 }
    ]

    const [rating, SetRating] = useState(0)
    const [ratingCount, SetRatingCount] = useState(0)

    const handleClick = (a) => {
        SetRatingCount(ratingCount + 1);
        SetRating((rating + a))
    }

    const createStars = stars.map((el) => {
        return <Star className={el.name} onClick={() => handleClick(el.value)} >★</Star>
    })

    const averageRate = (rating / ratingCount).toFixed(1)

    return (
        <StarBox>
            <p>{isNaN(averageRate) ? 0 : averageRate} ({ratingCount} votes)</p>
            {createStars}
        </StarBox>
    );
};

export default CardStars;