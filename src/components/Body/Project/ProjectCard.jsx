import React from 'react';
import './projectcard.css';
import { Typography, Grid,Card,CardActionArea,CardActions,CardContent, CardMedia,Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const ProjectCard = ({item}) => {
  return (
    <>
      <Grid item xs={12} md={6}>
      <Card style={{backgroundColor:'#000',border:'4px solid aqua',color:'#fff'}}>
        <CardActionArea>
        <CardContent style={{minHeight:"0px"}}>
          <Typography variant="h6" gutterBottom style={{color:'#ffff99'}}>
            {item.name}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom style={{color:''}}>
            {item.description}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom style={{color:'gray'}}>
            Last pushed: {item.pushedAt}
          </Typography>
          <div style={{display:'flex',flexFlow:'wrap'}}>
          {
                       item.languages.edges.map((list)=>{
                           return(
                               <>
                               <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginRight:'15px'}}>
                               <div style={{backgroundColor:`${list.node.color}`,height:'16px',borderRadius:'8px',width:'16px',marginRight:'10px'}}>
                                  </div> 
                                  <div style={{marginRight:'4px',fontWeight:700}}>{list.node.name}</div>
                               <div style={{color:'gray'}}>{(list.size/item.languages.totalSize).toFixed(2)}</div>
                              </div>
                               
                               </>
                           )
                       })
                   }
          </div>
          
          <CardActions>
          <span style={{color:'lightblue'}}>Source</span>
          <Link href={item.url} rel="noreferrer">
          <GitHubIcon/>
            </Link>
          </CardActions>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    </>
    
  );
}

export default ProjectCard;


