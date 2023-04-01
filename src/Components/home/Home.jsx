import React from "react";
import ComponentB from "../Lesson6/ComponentB";
import { useContext } from "react";
import { MyContext } from "../Lesson6/ContexExample";
import { FetchContext } from "../Lesson6/FetchContext";
const Home = () => {
  const { counter, handleClick } = useContext(MyContext);
  const { data } = useContext(FetchContext);

  console.log(data);
  return (
    <>
      <ComponentB />
    </>
  );
};

export default Home;
