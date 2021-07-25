import React from 'react';
import './projectcard.css';
import { Typography, Grid,Card,CssBaseline,Container,CardActions,CardContent, CardMedia } from '@material-ui/core';

const ProjectCard = ({item}) => {
  return (
    <>
      <Grid item xs={12} md={6}>
      <Card style={{backgroundColor:'#000',border:'4px solid aqua',color:'#fff'}}>
        <CardContent style={{minHeight:"0px"}}>
          <Typography variant="h6" gutterBottom style={{color:'#ffff99'}}>
            {item.name}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom style={{color:''}}>
            {item.description}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom style={{color:''}}>
            Last pushed at {item.pushedAt}
          </Typography>
          <div style={{display:'flex'}}>
          {
                       item.languages.edges.map((list)=>{
                           return(
                               <>
                               <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginRight:'15px'}}>
                               <div style={{backgroundColor:`${list.node.color}`,height:'16px',borderRadius:'8px',width:'16px',marginRight:'10px'}}>
                                  </div> 
                                  <div style={{marginRight:'4px',fontWeight:700}}>{list.node.name}</div>
                               <div>{(list.size/item.languages.totalSize).toFixed(2)}</div>
                              </div>
                               
                               </>
                           )
                       })
                   }
          </div>
          <CardActions>
          <a href={item.url} className="btn" rel="noreferrer">
            <span style={{color:'white'}}>Visit</span>
            </a>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
    </>
    
  );
}

export default ProjectCard;

/* {
                data.map((item,index)=>{
                    return(
                    <>
                    <h4>{item.name}</h4>
                    <h5>{item.url}</h5>  
                    <h5>{item.createdAt}</h5>
                    <h6>{item.description}</h6>
                   <p>{item.languages.totalSize}</p>
                   {
                       item.languages.edges.map((list)=>{
                           return(
                               <>
                               <p>{list.size}</p>
                               <p>{list.node.name}</p>
                               <div style={{backgroundColor:`${list.node.color}`,minHeight:'20px',borderRadius:'50%',width:'25px'}}>
                                   </div> 
                               
                               </>
                           )
                       })
                   }
                    </>
                    )
                })
            }*/
