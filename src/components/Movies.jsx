import React from 'react';
import {useSelector} from 'react-redux';
import {
    Grid, Card, CardActionArea,
    CardMedia, CardActions, Typography
  } from "@material-ui/core";
  

import Form from './Form';
import Loading from './Loading';
import Like from './Like';



export default () => {
    const {loading, error, data} = useSelector(state => state.movies)
    return(
        <div>
            <Form />
            {loading && <Loading />}
            {error !== "" && <p>{error}</p>}
            {data.length !== 0 && (
                <Grid container justify='center' spacing={3}>
                    {data.map(({imdbID, Title, Year, Poster})=>(
                        <Grid item xs={12} sm={6} md={3} key={imdbID}>
                           <Card>
                               <CardActionArea>
                                   <CardMedia 
                                   component = "img"
                                   height = "200"
                                   image = {Poster}
                                   title = {Title}
                                   />
                                <Typography variant='h5'>
                                    {Title} ({Year})
                                </Typography>
                               </CardActionArea>
                               <CardActions>
                                   <Like 
                                     imdbID={imdbID}
                                     Title={Title}
                                     Year={Year}
                                     Poster={Poster}
                                    />
                                    Add to favorites
                               </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
            
        </div>
    )
}