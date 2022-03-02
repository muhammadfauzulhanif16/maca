import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Routers } from "./Routers";

export const App: FC<{}> = (): JSX.Element => {
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
