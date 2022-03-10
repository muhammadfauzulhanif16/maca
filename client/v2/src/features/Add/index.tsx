import { Field, Form } from "formik";
import { Layout } from "../common/Layout";
import { Formik } from "formik";
import {
  ArrowEnterLeft,
  SpinnerIos,
} from "@emotion-icons/fluentui-system-regular";
import { createBookAct } from "../../store/actions/book";
import { useNavigate } from "react-router-dom";
import { IconButton } from "../common/IconButton";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { FC } from "react";

export const AddComponent: FC<{}> = (): JSX.Element => {
  const dispatch = useAppDispatch(),
    { isLoading } = useAppSelector(({ book }: RootState) => book),
    navigate = useNavigate(),
    InputForms: string[] = ["Title", "Author", "Year"];

  return (
    <Layout titlePage="Add">
      <Formik
        initialValues={{
          title: "",
          author: "",
          year: "",
          is_completed: false,
        }}
        onSubmit={(values, { resetForm }): void => {
          dispatch(createBookAct(values));
          resetForm();

          setTimeout(() => {
            navigate(values.is_completed === false ? "/reading" : "/finished");
          }, 2000);
        }}
      >
        <Form>
          <div className="my-8 flex justify-between">
            <p className="text-3xl font-medium">Add</p>

            <IconButton
              className={`${
                isLoading ? "cursor-progress" : "cursor-pointer"
              } transition-all ease-in-out font-medium shadow-xl py-2 bg-cyan-400 dark:bg-cyan-500 hover:bg-cyan-500 hover:bg-cyan-400 dark:hover:text-zinc-900 hover:text-zinc-50 px-4 rounded-xl flex items-center`}
              icon={
                isLoading ? (
                  <SpinnerIos width={24} className="animate-spin" />
                ) : (
                  <ArrowEnterLeft width={24} />
                )
              }
              text={isLoading ? "Loading" : "Submit"}
              textClass="ml-4"
              type="submit"
              isLoading={isLoading}
            />
          </div>

          {isLoading ? (
            <IconButton
              className="dark:hover:text-zinc-900 hover:text-zinc-50 p-2 mx-2 flex justify-center items-center"
              icon={<SpinnerIos width={32} className="animate-spin" />}
              text="Loading"
              textClass="ml-4"
            />
          ) : (
            <>
              {InputForms.map(
                (title: string, id: number): JSX.Element => (
                  <label key={id} htmlFor="title" className="flex flex-col">
                    {title}
                    <Field
                      required
                      id={title.toLowerCase()}
                      name={title.toLowerCase()}
                      type="text"
                      className="mt-4 form-input bg-zinc-100 dark:bg-zinc-800 rounded-xl focus:ring-0 border-0"
                    />
                  </label>
                )
              )}
            </>
          )}
        </Form>
      </Formik>
    </Layout>
  );
};
