import React , {useEffect} from 'react';
import QuoteList from './../components/quotes/QuoteList';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import LoadingSpinner from './../components/UI/LoadingSpinner';
import NoQuotesFound from './../components/quotes/NoQuotesFound';


function AllQuotes() {
  const  {sendRequest:getQuotes,status,data:loadedQuotes , error} = useHttp(getAllQuotes,true);

  useEffect(() => {
    getQuotes();
  },[getQuotes]);

  if(status==='pending'){
    return (
      <div className='centered'>         
           <LoadingSpinner />
      </div>
    )
  }

  if(error){
    return <p className='centered focused'> {error }</p>
  }


  if(status === 'completed' && (!loadedQuotes || loadedQuotes.length==0)){  
    return <NoQuotesFound />
  }
  

  return (
    <div> All Quotes
      <QuoteList quotes={loadedQuotes}/>      
    </div>
  )
}

export default AllQuotes