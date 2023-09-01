import React from 'react'
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Fade } from 'react-awesome-reveal';

export const ToysDescriptionList = () => {
  return (
    <Fade cascade triggerOnce={true}>
      <List>
        <ListItem>
        <Typography className="list-text" variant="h1">Never too old for a toy </Typography>
        </ListItem>
        <ListItem>
        <Typography className="list-text" variant="h1">The best place for your kids</Typography>
        </ListItem>
        <ListItem>
        <Typography className="list-text" variant="h1">Life full of Games</Typography>
        </ListItem>
        <ListItem>
        <Typography className="list-text" variant="h1">Toys for every age</Typography>
        </ListItem>
        <ListItem>
        <Typography className="list-text" variant="h1">Pick what you want </Typography>
        </ListItem>
    </List>
    </Fade>
    
  )
}
