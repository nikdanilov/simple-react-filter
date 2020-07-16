import React, { useState, useEffect } from "react";
import "./App.css"

const languages = [
  "Python",
  "Java",
  "JavaScript",
  "C",
  "C++",
  "C#",
  "SQL",
  "Shell",
];

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = languages.filter((lang) =>
      lang.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setSearchResults(results);
  }, [search]);

  return (
    <div className="App">
      <div
        style={{
          display: "block",
          border: "2px solid green",
          width: "20%",
          textAlign: "center",
          margin: "0 auto",
          marginTop: "2rem",
        }}
      >
        <h1>React Filter</h1>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
        <ul style={{margin:"1rem"}}>
          {searchResults.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
