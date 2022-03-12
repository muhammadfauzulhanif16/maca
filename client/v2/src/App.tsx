import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Routers, RoutersState } from "./Routers";
import { Message } from "./features/common/Message";

export const App: FC<{}> = (): JSX.Element => {
  return (
    <>
      <Message
        custom="Visit previous version of Maca v1"
        url="https://maca-v1.vercel.app"
      />

      <Routes>
        {Routers.map(
          ({ element, path }: RoutersState, id: number): JSX.Element => (
            <Route key={id} path={`/${path}`} element={element} />
          )
        )}
      </Routes>
    </>
  );
};
