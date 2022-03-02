import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortingQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA,quoteB)=> {
        if(ascending){
          return quoteA.id > quoteB.id ? 1: -1;
        } else {
          return quoteA.id < quoteB.id ? 1: -1;
        } 
    });   
  }

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const url = new URL(document.URL);
  const queryParams = encodeURI(url.searchParams.get("sort"));
  const isSortAscending = queryParams === 'asc';

  const quotes = sortingQuotes(props.quotes, isSortAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname:location.pathname,
      search:`?sort=${(isSortAscending ? 'desc': 'asc')}`
    });
    // or method
    // history.push('/quotes?sort=' + (isSortAscending ? 'desc': 'asc'));
  }

  

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortAscending ? 'Descending': 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
