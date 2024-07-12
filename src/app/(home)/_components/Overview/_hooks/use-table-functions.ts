import { useCallback } from 'react';
import type { Table } from '@tanstack/react-table';

import type { AssetDataType } from '@/model/assets';

/**
 * @function useTableFunctions
 * @param table
 */
function useTableFunctions(table: Table<AssetDataType>) {
  const isPreviousPageDisabled = !table.getCanPreviousPage();
  const isNextPageDisabled = !table.getCanNextPage();

  const onGoToNextPage = useCallback(() => {
    table.nextPage();
  }, [table]);

  const onGoToPreviousPage = useCallback(() => {
    table.previousPage();
  }, [table]);

  return {
    isPreviousPageDisabled,
    isNextPageDisabled,
    onGoToNextPage,
    onGoToPreviousPage,
  };
}

export default useTableFunctions;
