import { FC } from "react";
import { AddComponent, Layout } from "../../../components";

const AddPage: FC<{}> = (): JSX.Element => {
  return <Layout title="Add" children={<AddComponent />} />;
};

export default AddPage;
