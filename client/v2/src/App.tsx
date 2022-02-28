import React from "react";
import { Routes, Route } from "react-router-dom";
import { Routers } from "./Routers";

export const App = () => {
  return (
    <Routes>
      {Routers.map(
        ({ element, path }, id: number): JSX.Element => (
          <Route key={id} path={`/${path}`} element={element} />
        )
      )}
    </Routes>
  );
};
