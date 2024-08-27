import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';

type ColumnConfig<T> = {
  id: keyof T;
  label: string;
  rowSpanKey?: keyof T; // rowSpan 기준이 되는 키
};

// type GenericTableProps<T> = {
//   columns: ColumnConfig<T>[];
//   data: T[];
// };

export function RenderTable() {
  return <></>;
}
