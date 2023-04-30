import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Route from "./components/Route";
import Header from "./components/Header";
import Text from "./components/Text";

const items = [
  {
    title: "What is React",
    content: "React is a javascript framework",
  },
  {
    title: "Why use React",
    content: "React is the favorite JS library among engineers",
  },
  {
    title: "How do you use React",
    content: "You use React by creating component",
  },
];

const options = [
  {
    label: "The Color red",
    value: "red",
  },

  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[1]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/text">
        <Text />
      </Route>
    </div>
  );
};

export default App;
