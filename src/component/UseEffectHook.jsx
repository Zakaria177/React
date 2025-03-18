import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  let [data, setData] = useState();

  //fetching api data using promises in useeffect
  //   useEffect(() => {
  //     fetch("https://dummyjson.com/products")
  //       .then((res) => res.json())
  //       .then((json) => setData(json));
  //   }, []);

  useEffect(() => {
    (async () => {
      let response = await fetch("https://dummyjson.com/products");
      let json = await response.json();
      setData(json);
    })();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default UseEffectHook;
