import { FC } from "react";
import { Layout } from "../../components";
import { DashboardComponent } from "../../components/pages/Dashboard";

const DashboardPage: FC<{}> = () => {
  return <Layout title="Dashboard" children={<DashboardComponent />} />;
};

export default DashboardPage;
