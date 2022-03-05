import { FC } from "react";
import { ReadingComponent } from "../../features";
import { Helmet } from "react-helmet";

export const ReadingPage: FC<{}> = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Reading books | Maca - Bookshelf App</title>
      </Helmet>

      <ReadingComponent />
    </>
  );
};
