import React , {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

function NewQuotes() {
  const  {sendRequest,status} = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if(status==='completed'){
      history.push("/quotes");
    }
  },[status,history]);

  const submitForm =(quoteData) => {
    sendRequest(quoteData);
  }

  return (
    <div>New Quotes
      <QuoteForm isLoading={status==='pending'} onAddQuote={submitForm}/>
    </div>
  )
}

export default NewQuotes