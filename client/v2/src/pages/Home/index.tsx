import { FC } from "react";
import { HomeComponent } from "../../features";
import { Helmet } from "react-helmet";

export const HomePage: FC<{}> = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Home | Maca - Bookshelf App</title>
      </Helmet>

      <HomeComponent />
    </>
  );
};
