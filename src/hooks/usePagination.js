import { useMemo } from 'react';


export const usePagination = (activePage, entriesShown, data) => {

  const indexOfLastItem = useMemo(() => {
    return activePage * entriesShown
  }, [activePage, entriesShown]);

  const indexOfFirstItem = useMemo(() => {
    return indexOfLastItem - entriesShown
  }, [indexOfLastItem, entriesShown]);

  const currentList = useMemo(() => {
    return data.slice(indexOfFirstItem, indexOfLastItem);
  }, [indexOfFirstItem, indexOfLastItem, data]);

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / entriesShown); i++) {
    pages.push(i);
  }

  return [ currentList, pages ]
}