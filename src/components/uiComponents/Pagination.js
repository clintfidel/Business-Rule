import React, { useState } from "react";
import { VscEllipsis } from "react-icons/vsc";

const Pagination = ({ pages, setActivePage, activePage }) => {
  const [pageNumberLimit, setpageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const goToPage = (event) => {
    setActivePage(Number(event.target.id));
  };

  const handleNextBtn = () => {
    setActivePage(activePage + 1);
    if(activePage) {
      setpageNumberLimit(pageNumberLimit)
    }

    if (activePage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setActivePage(activePage - 1);

    if ((activePage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li
        className={[
          "px-3",
          "py-1",
          "cursor-pointer",
          "font-customBarlow",
          "text-sm",
        ].join(" ")}
        onClick={handleNextBtn}
      >
        <VscEllipsis color="#3A434B" size="1.1rem" />
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li
        className={[
          "px-3",
          "py-1",
          "cursor-pointer",
          "font-customBarlow",
          "text-sm",
        ].join(" ")}
        onClick={handlePrevBtn}
      >
        <VscEllipsis color="#3A434B" size="1.1rem" />
      </li>
    );
  }

  return (
    <ul className="flex justify-end mt-8">
      <li
        className={[
          "px-3",
          "py-1",
          "cursor-pointer",
          "font-customBarlow",
          "text-sm",
          // `${
          //   activePage === pageNum
          //     ? `bg-inbev-pagination-active`
          //     : `bg-white`
          // }`,
          // `${
          //   activePage === pageNum
          //     ? `text-inbev-pagination-text`
          //     : `text-inbev-secondary`
          // }`,
        ].join(" ")}
        id="prev"
        onClick={activePage === pages[0] ? null : handlePrevBtn}
      >
        Prev
      </li>
      {pageDecrementBtn}
      {pages.map((pageNum) => {
        if (pageNum < maxPageNumberLimit + 1 && pageNum > minPageNumberLimit) {
          return (
            <li
              className={[
                "px-3",
                "py-1",
                "cursor-pointer",
                "font-customBarlow",
                "text-sm",
                `${
                  activePage === pageNum
                    ? `bg-inbev-pagination-active`
                    : `bg-white`
                }`,
                `${
                  activePage === pageNum
                    ? `text-inbev-pagination-text`
                    : `text-inbev-secondary`
                }`,
              ].join(" ")}
              key={pageNum}
              id={pageNum}
              onClick={goToPage}
            >
              {pageNum}
            </li>
          );
        }
        else {
          return null
        }
      })}
      {pageIncrementBtn}
      <li
        className={[
          "px-3",
          "py-1",
          "cursor-pointer",
          "font-customBarlow",
          "text-sm",
          // `${
          //   activePage === pageNum
          //     ? `bg-inbev-pagination-active`
          //     : `bg-white`
          // }`,
          // `${
          //   activePage === pageNum
          //     ? `text-inbev-pagination-text`
          //     : `text-inbev-secondary`
          // }`,
        ].join(" ")}
        id="next"
        onClick={activePage === pages[pages.length - 1] ? null : handleNextBtn}
      >
        Next
      </li>
    </ul>
  );
};

export default Pagination;
