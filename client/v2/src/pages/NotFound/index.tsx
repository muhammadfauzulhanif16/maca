import { FC } from "react";
import { NotFoundComponent } from "../../features";
import { Helmet } from "react-helmet";

export const NotFoundPage: FC<{}> = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Not Found | Maca - Bookshelf App</title>
      </Helmet>

      <NotFoundComponent />
    </>
  );
};
