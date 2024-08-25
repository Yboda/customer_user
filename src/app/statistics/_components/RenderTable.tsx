import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';

type ColumnConfig<T> = {
  id: keyof T;
  label: string;
  rowSpanKey?: keyof T; // rowSpan 기준이 되는 키
};

type GenericTableProps<T> = {
  columns: ColumnConfig<T>[];
  data: T[];
};

export function RenderTable<T>({columns, data}: GenericTableProps<T>) {
  return (
    <Table
      sx={{
        border: '1px solid #000',
        '& .MuiTableCell-root': {borderColor: '#000', borderRight: '1px solid #000', textAlign: 'center'},
      }}
    >
      <TableHead>
        <TableRow>
          {columns.map(column => (
            <TableCell key={String(column.id)} sx={{fontSize: '1.2rem'}}>
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, rowIndex) => {
          let previousRowSpan = {};

          return (
            <TableRow key={`row-${rowIndex}`}>
              {columns.map((column, colIndex) => {
                const value = row[column.id];
                let rowSpan = undefined;

                if (column.rowSpanKey && !previousRowSpan[column.rowSpanKey]) {
                  const spanValue = data
                    .slice(rowIndex)
                    .filter(item => item[column.rowSpanKey] === row[column.rowSpanKey]).length;
                  rowSpan = spanValue > 1 ? spanValue : undefined;
                  previousRowSpan[column.rowSpanKey] = true;
                }

                return (
                  <TableCell key={`cell-${rowIndex}-${colIndex}`} rowSpan={rowSpan} sx={{fontSize: '1.2rem'}}>
                    {typeof value === 'number' ? value.toLocaleString() : value}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
