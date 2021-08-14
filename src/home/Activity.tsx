import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkIcon from '@material-ui/icons/Link';
import Link from '@material-ui/core/Link';

const createData = (name: string, href: string) => {
  return {name, href};
};

const rows = [
  createData('Twitter', 'https://twitter.com/h6akh'),
  createData('Facebook', 'https://www.facebook.com/h6ak.hotta'),
  createData('Instagram', 'https://www.instagram.com/h6ak.hotta/'),
  createData('GitHub', 'https://github.com/h6ak'),
  createData('はてなブログ', 'http://blog.h6ak.net/'),
  createData('Pixiv', 'https://www.pixiv.net/users/24378308')
];

const Activity: React.FunctionComponent = () => {
  return (
    <List>
      {rows.map((row) => (
        <ListItem key={row.name}>
          <ListItemIcon>
            <LinkIcon/>
          </ListItemIcon>
          <ListItemText>
            <Link href={row.href} color="inherit" target="_blank" rel="noopener">{row.name}</Link>
          </ListItemText>
        </ListItem>
        ))
      }
    </List>
  );
};

export default Activity;
