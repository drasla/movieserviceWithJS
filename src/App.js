import React from "react";
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
    return (
        <div>
        <h1>I like {name}</h1><img src={picture}/>
        <h4>{rating}/5.0</h4>
        </div>
)};

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "a.jpg",
        rating: 5
    },
    {
        id: 2,
        name: "Burger",
        image: "b.jpg",
        rating: 4.9
    },
    {
        id: 3,
        name: "Pizza",
        image: "c.jpg",
        rating: 5.8
    },
    {
        id: 4,
        name: "Steak",
        image: "d.jpg",
        rating: 1
    }
];

function renderFood(dish) {
    return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

function App() {
    return (
        <div>
            {foodILike.map(renderFood)}
        </div>);
}

export default App;
