import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const MealDetail = () => {
    const { mealId } = useParams();
    const [meal, setMeal] = useState({});

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0])

            )
    }, [])

    const { strMealThumb, strMeal, strInstructions } = meal;
    return (
        <div>
            <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', justifyContent: 'space-evenly' }}>
                <img width="40%" src={strMealThumb} alt="" />
                <Box sx={{ width: '50%' }}>
                    <h2>{strMeal}</h2>
                    <p>{strInstructions}</p>
                </Box>
            </Box>
        </div>
    );
};

export default MealDetail;