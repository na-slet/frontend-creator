import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import EventIcon from '@mui/icons-material/Event';
import EditIcon from '@mui/icons-material/Edit';
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";

const events = [
  {name: 'Файер 1', icon: true},
  {name: 'Файер 2', icon:false},
  {name: 'Еще какой то слёт', icon:true},
  {name: 'Вобще лагерь', icon:true},
  {name: 'Еще что то', icon:false},
  {name: 'И что то еще', icon: true},
]

export default function ListView(){
  return (
    <List>
      {events.map((event)=>(
        <ListItem
          secondaryAction={
            <Stack direction="row" alignItems="center" justifyContent="center" sx={{width: '100%'}} spacing={2}>
              <IconButton edge="end" aria-label="delete">
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Stack>
          }
        >
          <ListItemAvatar>
            <Avatar>
              {(event.icon ? <EventIcon/> : <LocalActivityIcon/>)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={event.name}
          />
        </ListItem>
      ))}
    </List>
  );
}