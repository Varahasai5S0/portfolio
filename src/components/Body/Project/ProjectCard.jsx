import React from 'react';
import './projectcard.css';
import { Typography, Grid,Card,CssBaseline,Container,CardActions,CardContent, CardMedia } from '@material-ui/core';


const ProjectCard = ({title,desc,image}) => {
  return (
    <>
      <Grid item xs={12} md={6}>
      <Card>
        <CardContent style={{minHeight:"0px"}}>
          <Typography variant="h6" gutterBottom color="secondary"> 
            {title}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom color="primary">
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    </>
    
  );
}

export default ProjectCard
