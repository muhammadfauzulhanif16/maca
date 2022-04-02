import { FC } from "react";
import { Layout } from "../../../components";
import { ShelfComponent } from "../../../components/pages/Shelf";

const ShelfPage: FC<{}> = (): JSX.Element => {
  return <Layout title="Shelf" children={<ShelfComponent />} />;
};

export default ShelfPage;
