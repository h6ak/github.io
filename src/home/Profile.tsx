import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function createData (key: string, value: string) {
  return {key, value}
}

const rows = [
  createData('名前', '堀田 弘明 (Hotta, Hiro-Aki)'),
  createData('職業', '会社経営'),
  createData('所属', '株式会社Kansable'),
  createData('Email', 'hiroaki.hotta@h6ak.net'),
  createData('使用プログラミング言語', 'Python, TypeScript, JavaScript, C, C++, Perl, etc.'),
  createData('宗派', '浄土宗, Vim, React.js, たけのこの里')
];

const Profile: React.FunctionComponent = () => {
  return (
    <Table>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.key}>
            <TableCell>{row.key}</TableCell>
            <TableCell>{row.value}</TableCell>
          </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
};

export default Profile;
