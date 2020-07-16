import React, { useState, useEffect } from "react";
import "./App.css";

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
      lang.toLowerCase() === search.toLowerCase()
    );
    setSearchResults(results);
  }, [search]);

  return (
    <div className="App">
      <div className="min-h-screen bg-gradient sm:p-3.5 sm:flex">
        <div className="sm:flex-1 font-sans bg-sepia-500 text-sepia-900 sm:rounded leading-normal relative overflow-x-hidden">
          <div className="sm:flex-1 sm:flex flex-col pt-6 md:max-w-6xl mx-6 lg:mx-auto">
            <main className="flex-1">
            <div className="mt-16 animation animation-fadeInUp animation-delay-2">
              <h3 className="inline-block rounded-lg m-0 text-sepia-900 bg-white text-4xl px-3 font-main" style={{transform: "rotate(-1deg)", boxShadow: "0 0 4px var(--white)"}}>Snippets</h3>
              <p className="mt-4 article font-main">A collection of short snippets I used to solve common problems.</p>
            </div>
              <div className="mt-2 animation animation-fadeInUp animation-delay-2 border-2 border-brand rounded-lg pl-2 py-1 flex items-center">
                <span className="font-medium text-gradient">Filter:</span>
                <div className="flex items-center overflow-x-auto overflow-y-hidden">
                  {languages.map((item) => (
                    <span
                      id={item}
                      key={item}
                      className={`${search === item ? 'bg-gradient' : ''} bg-sepia-300 inline-flex items-center ml-2 px-3 py-1 rounded-full text-sm font-medium leading-5 text-white cursor-pointer`}
                      onClick={(e) => setSearch(e.target.id)}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <ul style={{ margin: "1rem" }}>
                {searchResults.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
