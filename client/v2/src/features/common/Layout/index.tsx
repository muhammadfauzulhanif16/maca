import { FC, ReactNode } from "react";

import { Header } from "../Header";
import { Content } from "../Content";
import { SideBar } from "../SideBar";
import { Formik } from "formik";

interface LayoutProps {
  titlePage?: string;
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({
  titlePage,
  children,
}): JSX.Element => {
  return (
    <div className="flex h-screen">
      <SideBar titlePage={titlePage} />

      <Formik
        initialValues={{
          title: "",
          author: "",
          year: "",
          is_completed: false,
        }}
        onSubmit={(values, { resetForm }): void => {
          // dispatch(createBookAct(values));
          resetForm();
        }}
      >
        <div className="px-4 sm:px-8 w-full">
          <Header />

          <Content children={children} titlePage={titlePage} />
        </div>
      </Formik>
    </div>
  );
};
