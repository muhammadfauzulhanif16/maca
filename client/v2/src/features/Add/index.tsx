import { Field, Form, FormikProps } from "formik";
import { Layout } from "../common/Layout";
import { Formik, ErrorMessage } from "formik";
import {
  ArrowEnterLeft,
  SpinnerIos,
} from "@emotion-icons/fluentui-system-regular";
import { createBookAct } from "../../store/actions/book";
import { useNavigate } from "react-router-dom";
import { IconButton } from "../common/IconButton";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { FC } from "react";
import { InputForms } from "./InputForms";
import { object, string } from "yup";
import { Message } from "../common/Message";

export const AddComponent: FC<{}> = (): JSX.Element => {
  const dispatch = useAppDispatch(),
    { isLoading, success, error } = useAppSelector(
      ({ book }: RootState) => book
    ),
    navigate = useNavigate();

  return (
    <Layout titlePage="Add">
      {isLoading ? null : <Message success={success} error={error} />}

      <Formik
        initialValues={{
          title: "",
          author: "",
          published: "",
          is_completed: false,
        }}
        validationSchema={object().shape({
          title: string().required("Required"),
          author: string().required("Required"),
          published: string()
            .required("Required")
            .max(14, "Must be 14 characters"),
        })}
        onSubmit={(values, { resetForm, setSubmitting }): void => {
          dispatch(createBookAct(values));
          setSubmitting(false);
          resetForm();
          setTimeout(() => {
            navigate(values.is_completed === false ? "/reading" : "/finished");
          }, 5000);
        }}
      >
        {({ isSubmitting }: FormikProps<any>): JSX.Element => {
          return (
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
                  isSubmitting={isSubmitting}
                />
              </div>

              {isLoading ? (
                <IconButton
                  className="p-2 mx-2 flex justify-center items-center"
                  icon={<SpinnerIos width={32} className="animate-spin" />}
                  text="Loading"
                  textClass="ml-4"
                />
              ) : (
                <>
                  {InputForms.map(
                    (title: string, id: number): JSX.Element => (
                      <label
                        key={id}
                        htmlFor={title.toLowerCase()}
                        className="flex flex-col h-28"
                      >
                        <p className="font-medium text-md">
                          {title}{" "}
                          <span className="text-red-400 dark:text-red-500">
                            *
                          </span>
                        </p>

                        <Field
                          placeholder={`Enter book ${title.toLowerCase()}`}
                          id={title.toLowerCase()}
                          name={title.toLowerCase()}
                          type={
                            title.toLowerCase() === "published"
                              ? "month"
                              : "text"
                          }
                          className="w-full border-0 mt-4 px-4 form-input bg-zinc-100 dark:bg-zinc-800 rounded-xl focus:ring-0"
                        />

                        <ErrorMessage
                          className="text-red-400 dark:text-red-500"
                          name={title.toLowerCase()}
                          component="p"
                        />
                      </label>
                    )
                  )}

                  <label
                    htmlFor="is_completed"
                    className="inline-flex items-center"
                  >
                    <Field
                      type="checkbox"
                      id="is_completed"
                      name="is_completed"
                      className="border-0 form-checkbox text-cyan-400 dark:text-cyan-500 rounded-md focus:ring-offset-0 focus:ring-0 bg-zinc-100 dark:bg-zinc-800"
                    />

                    <p className="font-medium text-md ml-4">
                      Have you finished reading the book?
                    </p>
                  </label>
                </>
              )}
            </Form>
          );
        }}
      </Formik>
    </Layout>
  );
};
