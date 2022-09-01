// @ts-nocheck
import { FunctionComponent } from 'react';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  MinusIcon,
} from '@heroicons/react/outline';
import { useSortBy, useTable } from 'react-table';

interface TableProps {
  columns: {
    Header: string;
    accessor: string;
    sortType: string;
  }[];
  data: any[];
}

const Table: FunctionComponent<TableProps> = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table
      {...getTableProps()}
      className='min-w-full table-auto divide-y divide-gray-300 '
    >
      <thead className='bg-gray-50'>
        {headerGroups.map((headerGroup) => (
          // eslint-disable-next-line react/jsx-key
          <tr {...headerGroup.getHeaderGroupProps()}>
            <th
              scope='col'
              className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
            >
              S No.
            </th>
            {headerGroup.headers.map((column) => (
              // eslint-disable-next-line react/jsx-key
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                scope='col'
                className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
              >
                {column.render('Header')}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <ChevronDownIcon className='ml-2 inline-flex h-4 w-4' />
                    ) : (
                      <ChevronUpIcon className='ml-2 inline-flex h-4 w-4' />
                    )
                  ) : (
                    <MinusIcon className='invisible ml-2 inline-flex h-4 w-4' />
                  )}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody
        className='divide-y divide-gray-200 bg-white'
        {...getTableBodyProps()}
      >
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            // eslint-disable-next-line react/jsx-key
            <tr {...row.getRowProps()}>
              <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                {i + 1}
              </td>
              {row.cells.map((cell) => (
                // eslint-disable-next-line react/jsx-key
                <td
                  className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                  {...cell.getCellProps()}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
