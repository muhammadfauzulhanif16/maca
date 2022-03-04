import { FC } from "react";
import { Layout } from "../common/Layout";
import { Form, Field } from "formik";

export const AddComponent: FC<{}> = (): JSX.Element => {
  return (
    <Layout titlePage="Add">
      <Form>
        <label htmlFor="title" className="flex flex-col">
          Title
          <Field
            id="title"
            name="title"
            type="text"
            className="mt-4 form-input bg-zinc-100 dark:bg-zinc-800 rounded-xl focus:ring-0 border-0"
          />
        </label>

        <label htmlFor="title" className="flex flex-col">
          Title
          <Field
            id="title"
            name="title"
            type="text"
            className="mt-4 form-input bg-zinc-100 dark:bg-zinc-800 rounded-xl focus:ring-0 border-0"
          />
        </label>

        <label htmlFor="title" className="flex flex-col">
          Title
          <Field
            id="title"
            name="title"
            type="text"
            className="mt-4 form-input bg-zinc-100 dark:bg-zinc-800 rounded-xl focus:ring-0 border-0"
          />
        </label>
      </Form>
    </Layout>
  );
};
