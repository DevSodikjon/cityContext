import React from "react";
import { useContext } from "react";
import Card from "./Card";
// import { MyContext } from "./ContexExample";
import { FetchContext } from "./FetchContext";

const ComponentB = () => {
  const { data } = useContext(FetchContext);
  return (
    <>
      {data.map((el) => (
        <Card
          key={el.ccn3}
          flags={el.flags.svg}
          country={el.name.common}
          capital={el.capital}
          population={el.population}
        />
      ))}
    </>
  );
};

export default ComponentB;
