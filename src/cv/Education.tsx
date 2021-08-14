import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function createData (period_start: string, period_end: string, name: string, last_status: string) {
  return { period_start, title: period_end, name, last_status }
}

const rows = [
  createData('2013年4月', '2016年3月', '神戸大学大学院 博士課程後期課程 物理学専攻', '単位取得満期退学'),
  createData('2011年4月', '2013年3月', '神戸大学大学院 博士課程前期課程 物理学専攻','修了'),
  createData('2009年4月', '2011年3月', '甲南大学 理工学部 物理学科', '卒業'),
  createData('2007年4月', '2009年3月', '甲南大学 理工学部 情報システム工学科',''),
  createData('2004年4月', '2007年3月', '甲南高等学校', '卒業'),
];

const Education: React.FunctionComponent = () => {
  return (
    <Table>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.period_start}〜{row.title}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.last_status}</TableCell>
          </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
};

export default Education;
