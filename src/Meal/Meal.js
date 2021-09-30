import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Meal = (props) => {
    console.log(props.meal)

    const { strMealThumb, strMeal, strInstructions, idMeal } = props.meal;
    const history = useHistory()
    const handleClick = () => {
        history.push(`/meal/${idMeal}`)
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={strMealThumb}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {strMeal}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {strInstructions.slice(0, 140)}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/meal/${idMeal}`}>More</Link>
                <Link to={`/meal/${idMeal}`}>
                    <Button sx={{ bgcolor: 'warning.main', color: 'text.secondary' }} >Learn More</Button>
                </Link>
                <br />
                <Button onClick={handleClick} variant="contained">Contained</Button>

            </CardActions>
        </Card>
    );
};

export default Meal;