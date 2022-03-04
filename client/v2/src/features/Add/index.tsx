import { FC } from "react";
import { Layout } from "../common/Layout";

export const AddComponent: FC<{}> = (): JSX.Element => {
  return (
    <Layout titlePage="Add">
      <label htmlFor="title" className="flex flex-col">
        Title
        <input
          id="title"
          name="title"
          type="text"
          className="mt-4 form-input bg-zinc-800 rounded-xl focus:ring-0 border-0"
        />
      </label>

      <label htmlFor="title" className="flex flex-col">
        Title
        <input
          id="title"
          name="title"
          type="text"
          className="mt-4 form-input bg-zinc-800 rounded-xl focus:ring-0 border-0"
        />
      </label>

      <label htmlFor="title" className="flex flex-col">
        Title
        <input
          id="title"
          name="title"
          type="text"
          className="mt-4 form-input bg-zinc-800 rounded-xl focus:ring-0 border-0"
        />
      </label>
    </Layout>
  );
};
