import { PaginationProps } from "../types";

const Pagination = (props: PaginationProps) => {
  const getNumbers = () => {
    let numbers = [];
    let pageNumber = 1;
    const itemsPerPage = props.itemsPerPage;

    for (let i = 0; i < props.count; i += itemsPerPage) {
      let content;

      content = (
        <div className="bg-transparent border border-blue-500 text-blue-800 py-2 px-3 font-medium hover:bg-blue-200">
          {pageNumber}
        </div>
      );

      numbers.push(content);
      pageNumber++;
    }

    return numbers;
  };

  return (
    <>
      <div className="flex space-x-1">
        <button className="bg-transparent border border-blue-500 text-blue-800 py-2 px-3 font-medium hover:bg-blue-200">
          Previous
        </button>
        <div className="flex space-x-1">{getNumbers()}</div>
        <button className="bg-transparent border border-blue-500 text-blue-800 py-2 px-3 font-medium hover:bg-blue-200">
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
