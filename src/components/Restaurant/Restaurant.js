import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Meal from '../../Meal/Meal';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))

    }, [searchText])

    const handleSearch = (event) => {
        setSearchText(event.target.value)

    }

    return (
        <div>
            <Box mt={2} mx={'auto'}
                sx={{
                    width: '50%',
                    maxWidth: '100%'

                }}
            >
                <TextField onChange={handleSearch} fullWidth label="Search meals..." />
            </Box>
            <Box sx={{ flexGrow: 1, m: 5, pl: 7 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        meals?.map(meal => <Grid key={meal.idMeal} item xs={2} sm={4} md={4} >
                            <Meal meal={meal}></Meal>

                        </Grid>
                        )}
                </Grid>
            </Box>


        </div>
    );
};

export default Restaurant;