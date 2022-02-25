import { FC } from "react";
import { Icon } from "../common/Icon";
import "./index.css";

export const NotFoundComponent: FC<{}> = (): JSX.Element => {
  return (
    <div className="not-found-container">
      <Icon icon="search" size="lg" title="404" className="p-0" />

      <p className="font-medium text-xl">Page not found, please come back</p>

      <br />

      <Icon title="Home" link="/" className="home-button" />
    </div>
  );
};
