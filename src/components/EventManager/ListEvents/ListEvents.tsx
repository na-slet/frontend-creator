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
import {Badge, ListItemButton, Stack} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";

type Props = {
  access_token: string
  onChoose: (event_id: string)=>void
  onEdit: (event_id: string)=>void
}

function updateEvents(access_token: string, setEvents): void{
  axios.get('https://creator.backend.naslet.ru/user/events', {params:{
      access_token: access_token
    }}).then((resp)=>{
      setEvents(resp.data)
  })
}

function deleteEvent(access_token: string, event_id: string, setEvents): void{
  axios.delete('https://creator.backend.naslet.ru/event',{params:{
      access_token: access_token,
      id: event_id
    }}).then((resp)=>{
      updateEvents(access_token, setEvents);
  })
}

export default function ListEvents(props: Props){
  const [events, setEvents] = useState([]);
  useEffect(()=>{
    updateEvents(props.access_token, setEvents);
  },[]);
  return (
    <List>
      {events.map((event)=>(
        <ListItem
          key={event.name}
          secondaryAction={
            <Stack direction="row" alignItems="center" justifyContent="center" sx={{width: '100%'}} spacing={2}>
              <IconButton edge="end" aria-label="edit" onClick={()=>{props.onEdit(event.id)}}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={()=>{deleteEvent(props.access_token,event.id,setEvents)}}>
                <DeleteIcon />
              </IconButton>
            </Stack>
          }
        >
          <ListItemButton onClick={()=>{props.onChoose(event.id)}}>
            <ListItemAvatar>
              <Badge badgeContent={event.num} max={99} color="primary">
                <Avatar>
                  {(event.icon ? <EventIcon/> : <LocalActivityIcon/>)}
                </Avatar>
              </Badge>
            </ListItemAvatar>
            <ListItemText
              primary={event.name}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}