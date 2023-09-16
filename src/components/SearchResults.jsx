function SearchResults({ results }) {
  return (
    <div className="search-results">
      <ul>
        {results.map((result) => (
          <li key={result.ggId}>
            <div>
              <img
                src={result.imageUrl}
                alt={result.name}
                width="50"
                height="50"
              />
            </div>
            <div>{result.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
