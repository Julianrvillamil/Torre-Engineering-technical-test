import { useState, useEffect } from "react";
import { MdPersonSearch } from "react-icons/md";

function SearchBar({ updateResults }) {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://arda.torre.co/entities/_search", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: input,
            torreGgId: "1276904",
            identityType: "person",
            limit: 10,
            meta: true,
            excludedPeople: [],
            excludeContacts: true,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          //   const results = data.results; // Acceder a los resultados dentro de data
          updateResults(data.results); // Llama a la función para actualizar los resultados
          //   setSearchResults(results);
        } else {
          console.error("Error al obtener los datos");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    if (input.trim() !== "") {
      fetchData();
    } else {
      //   setSearchResults([]);
      updateResults([]); // Si el input está vacío, actualiza los resultados a un arreglo vacío
    }
  }, [input]);

  return (
    <div>
      <MdPersonSearch id="person-search-icon" />
      <input
        placeholder="Busca personas por nombre"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* <ul>
        {searchResults.map((result) => (
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
      </ul> */}
    </div>
  );
}

export default SearchBar;
