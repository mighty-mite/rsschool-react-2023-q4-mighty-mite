import './pagination.scss';

interface IProps {
  numberOfPages: number;
  handlePageNums: (pageNumber: number) => void;
}

function Pagination(props: IProps) {
  const { numberOfPages, handlePageNums } = props;

  const btns = [...Array(numberOfPages).keys()]
    .map((i) => i + 1)
    .map((num) => (
      <button
        className="pagination__num pagination__page-button"
        key={num}
        type="button"
        onClick={() => handlePageNums(num)}
      >
        {num}
      </button>
    ));

  return (
    <div className="pagination">
      <button className="pagination__prev pagination__button" type="button">
        &laquo;
      </button>
      {btns}
      <button className="pagination__next pagination__button" type="button">
        &raquo;
      </button>
    </div>
  );
}

export default Pagination;
