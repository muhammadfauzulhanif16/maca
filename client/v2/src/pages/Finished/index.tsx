import { FC } from "react";
import { FinishedComponent } from "../../features";
import { Helmet } from "react-helmet";

export const FinishedPage: FC<{}> = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Finished books | Maca - Bookshelf App</title>
      </Helmet>

      <FinishedComponent />
    </>
  );
};
