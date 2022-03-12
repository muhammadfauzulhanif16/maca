import { FC } from "react";
import { AddComponent } from "../../features";
import { Helmet } from "react-helmet";

export const AddPage: FC<{}> = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Add book | Maca - Bookshelf App</title>
      </Helmet>

      <AddComponent />
    </>
  );
};
