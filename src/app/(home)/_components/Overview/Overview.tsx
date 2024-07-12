'use client';

import { Fragment } from 'react';
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { AssetCollectionDataType } from '@/model/assets';

import useDataSource from './_hooks/use-data-source';
import useTableFunctions from './_hooks/use-table-functions';

import Pagination from './Pagination';

import { columns } from './data-table';

interface OverviewPropsType {
  assets?: AssetCollectionDataType['assets'];
}

function Overview(props: OverviewPropsType) {
  const data = useDataSource(props.assets ?? []);
  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 25,
      },
    },
  });

  const { isNextPageDisabled, isPreviousPageDisabled, onGoToNextPage, onGoToPreviousPage } = useTableFunctions(table);

  return (
    <Fragment>
      <div className="rounded-md border mt-4">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Pagination
        isNextPageDisabled={isNextPageDisabled}
        isPreviousPageDisabled={isPreviousPageDisabled}
        onGoToNextPage={onGoToNextPage}
        onGoToPreviousPage={onGoToPreviousPage}
      />
    </Fragment>
  );
}

export default Overview;
