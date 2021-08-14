import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function createData (period_start: string, period_end: string, name: string, position: string) {
  return { period_start, title: period_end, name, position }
}

const rows = [
  createData('2020年6月', '', '株式会社Kansable', '創業者・代表取締役'),
  createData('2016年4月', '2020年6月', '株式会社ジーニー', 'Webエンジニア')
];

const Work: React.FunctionComponent = () => {
  return (
    <Table>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.period_start}〜{row.title}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.position}</TableCell>
          </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
};

export default Work;
