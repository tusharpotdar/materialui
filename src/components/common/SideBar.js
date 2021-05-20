import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory} from 'react-router-dom';

export default function SideBar() {

  const history = useHistory();

  return (
    <List>
        <ListItem button key="Home" onClick={() => history.push("/")}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button key="Projects" onClick={() => history.push("/projects")}>
          <ListItemIcon><FolderIcon /></ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button key="SupportAndDocumentation" onClick={() => history.push("/support")}>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Support & Documentation" />
        </ListItem>
        <ListItem button key="Settings" onClick={() => history.push("/settings")}>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
    </List>
  )
};
