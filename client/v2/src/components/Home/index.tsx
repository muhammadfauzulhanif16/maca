import { FC } from "react";
import { Icon } from "../common/Icon";
import { PageIcons, PageIconsState } from "./PageIcons";
import { Header } from "../common/Header";
import "./index.scss";

export const HomeComponent: FC<{}> = (): JSX.Element => {
  return (
    <div className="home-container">
      <Header fixed />

      <div className="page-icons-container">
        {PageIcons.map(
          ({ icon, title }: PageIconsState, id: number): JSX.Element => (
            <Icon
              icon={icon}
              key={id}
              className="icon"
              link={title}
              size="lg"
              title={`${title} book`}
            />
          )
        )}
      </div>
    </div>
  );
};
