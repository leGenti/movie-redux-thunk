import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid, Card, CardActionArea,
  CardMedia, Typography
} from "@material-ui/core";

import {removeFAvorites} from '../data/favorites'


export default () => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault();
    dispatch(removeFAvorites())
  }
  return (
    <div>
      {favorites.length !== 0 && (
      <>
      <p>FAVORITES</p>
        <Grid container spacing={2}>
          {favorites.map(({ imdbID, Title, Year, Poster }) => (
            <Grid item xs={12} sm={6} md={3} key={imdbID}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={Poster}
                    title={Title}
                  />
                  <Typography variant="h6">
                    {Title} ({Year})
                  </Typography>
                </CardActionArea>
                <button type="submit" onSubmit={submitHandler}>remove from favorites</button>
              </Card>
            </Grid>
          ))}
        </Grid>
        </>
      )}
      {favorites.length === 0 && (
        <Typography variant="h6">
          You haven't added movies to your favorites yet, add or delete movies by checking or unchecking the checkbox.
        </Typography>
      )}
    </div>
  );
};