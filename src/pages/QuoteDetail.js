import React , {useEffect} from 'react';
import { useParams, Route , Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from './../components/UI/LoadingSpinner';

function QuoteDetail() {

  const match = useRouteMatch();
  const params = useParams();  
  const {quoteId} = params;

  const  {sendRequest,status,data:loadedQuotes , error} = useHttp(getSingleQuote,true);

  useEffect(() => {
    sendRequest(quoteId);
  },[sendRequest , quoteId]);

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

  if(!loadedQuotes.text){
    return <p>No Quote Found</p>
  }

  return (
    <div>
            <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author}/>
            <Route path={`${match.path}/`} exact>
              <div className="centered">
                <Link to={`${match.url}/comments`} className='btn--flat'>
                  Load Comments
                </Link>
            </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
    </div>

  )
}

export default QuoteDetail