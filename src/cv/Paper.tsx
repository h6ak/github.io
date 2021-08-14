import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';

function createData (authors: string, title: string, journal: string, journal_url: string) {
  return { authors, title, journal, journal_url }
}

const rows = [
  createData('Hiro-Aki Hotta', 'Bulk Property on Cayley Tree with Smooth Boundary Condition', 'arXiv:1412.3053', 'https://arxiv.org/abs/1412.3053')
];

const Paper: React.FunctionComponent = () => {
  return (
    <List>
      {rows.map((row, index) => (
        <ListItem key={index}>
          <ListItemText>
            {row.authors}, &quot;{row.title}&quot;, <Link href={row.journal_url} color="inherit" target="_blank" rel="noopener">{row.journal}</Link>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default Paper;
