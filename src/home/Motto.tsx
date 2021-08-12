import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Motto: React.FunctionComponent = () => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <StarBorderIcon />
        </ListItemIcon>
        <ListItemText>お金の余裕は心の余裕</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StarBorderIcon />
        </ListItemIcon>
        <ListItemText>納税は社会貢献</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StarBorderIcon />
        </ListItemIcon>
        <ListItemText>慎重になりすぎては何も得られず</ListItemText>
      </ListItem>
    </List>
  );
};

export default Motto;