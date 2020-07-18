import React from "react";

import "./App.css";
import Filter from "./Filter";

const example_data = [
  {
    title: "JavaScript Article",
    desc: "New JavaScript tips and trips",
    slug: "javascript-article",
    category: "JavaScript",
  },
  {
    title: "React Select Form Article",
    desc: "The best react select component",
    slug: "react-select-form",
    category: "React",
  },
];

function App() {
  return (
    <div className="App">
      <div className="min-h-screen sm:p-3 sm:flex">
        <div className="sm:flex-1 font-sans bg-sepia-500 text-sepia-900 sm:rounded leading-normal relative overflow-x-hidden">
          <div className="sm:flex-1 sm:flex flex-col pt-6 md:max-w-6xl mx-6 lg:mx-auto">
            <main className="flex-1">
              <div className="mt-16">
                <h3 className="inline-block rounded-lg text-sepia-900 bg-white text-4xl font-main">
                  Simple React Filter
                </h3>
                <p className="mt-4 article font-main">
                  A collection of elements to be filtered.
                </p>
              </div>
              <Filter data={example_data} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
