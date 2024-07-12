import { Button } from '@/components/ui/button';

interface PaginationPropsType {
  isNextPageDisabled: boolean;
  isPreviousPageDisabled: boolean;
  onGoToNextPage: () => void;
  onGoToPreviousPage: () => void;
}

function Pagination(props: PaginationPropsType) {
  const { isPreviousPageDisabled, isNextPageDisabled, onGoToNextPage, onGoToPreviousPage } = props;
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <Button variant="outline" size="sm" onClick={onGoToPreviousPage} disabled={isPreviousPageDisabled}>
        Previous
      </Button>
      <Button variant="outline" size="sm" onClick={onGoToNextPage} disabled={isNextPageDisabled}>
        Next
      </Button>
    </div>
  );
}

export default Pagination;
