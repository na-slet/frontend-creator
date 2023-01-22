import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

const events = [
  {name: 'Файер 1'},
  {name: 'Файер 2'},
  {name: 'Еще какой то слёт'},
  {name: 'Вобще лагерь'},
  {name: 'Еще что то'},
  {name: 'И что то еще'},
]

export default function TableView(){
  return (
    <List>
      {events.map((event)=>(
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary={secondary ? 'Secondary text' : null}
          />
        </ListItem>
      ))}
    </List>
  );
}