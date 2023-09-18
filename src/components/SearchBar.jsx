import { useState, useEffect } from "react";
import { MdPersonSearch } from "react-icons/md";
import "../styles/SearchBar.css";

function SearchBar({ updateResults }) {
  const [input, setInput] = useState("");

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
          updateResults(data.results);
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
      updateResults([]);
    }
  }, [input]);

  return (
    <div className="search-bar">
      <div className="search-bar-inner">
        <MdPersonSearch id="person-search-icon" />
        <input
          className="person-search-input"
          placeholder="Busca personas por nombre"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
