import './pagination.scss';

interface IProps {
  numberOfPages: number;
  handlePageNums: (pageNumber: number) => void;
  currentPage: number;
}

function Pagination(props: IProps) {
  const { numberOfPages, handlePageNums, currentPage } = props;

  const btns = [...Array(numberOfPages).keys()]
    .map((i) => i + 1)
    .map((num) => {
      let pageStyle = { color: 'black' };
      if (currentPage === num) pageStyle = { color: 'red' };
      return (
        <button
          className="pagination__num pagination__page-button"
          key={num}
          type="button"
          onClick={() => handlePageNums(num)}
          style={pageStyle}
        >
          {num}
        </button>
      );
    });

  return <div className="pagination">{btns}</div>;
}

export default Pagination;
