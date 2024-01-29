import Quote from '../Quote/Quote';


function AllQuotes(props) {

  return (
   
      <div className="App">
      {props.quotes.map(citation => (
        <Quote key={citation.id} {...citation} />
    ))}
      </div>
   
  );
}

export default AllQuotes;
