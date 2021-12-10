import React from "react";
import Entry from "./Entry";
import emojis from "../emojipedia";
function createEntry(term) {
  return (
    <Entry
      key={term.id}
      id={term.id}
      name={term.name}
      emoji={term.emoji}
      meaning={term.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojis.map(createEntry)}</dl>
    </div>
  );
}

export default App;
