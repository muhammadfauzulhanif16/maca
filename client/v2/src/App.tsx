import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Routers } from "./Routers";

const App: FC<{}> = () => {
  return (
    <Routes>
      {Routers.map(({ element, path }, id: number) => (
        <Route key={id} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default App;
