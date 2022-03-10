import { Field, Form } from "formik";
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
import * as Yup from "yup";

export const AddComponent: FC<{}> = (): JSX.Element => {
  const dispatch = useAppDispatch(),
    { isLoading } = useAppSelector(({ book }: RootState) => book),
    navigate = useNavigate();

  return (
    <Layout titlePage="Add">
      <Formik
        initialValues={{
          title: "",
          author: "",
          year: "",
          is_completed: false,
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Required"),
          author: Yup.string().required("Required"),
          year: Yup.string()
            .required("Required")
            .max(4, "Must be 4 characters"),
        })}
        onSubmit={(values, { resetForm, setSubmitting }): void => {
          dispatch(createBookAct(values));
          setSubmitting(false);
          resetForm();
          setTimeout(() => {
            navigate(values.is_completed === false ? "/reading" : "/finished");
          }, 2000);
        }}
      >
        {({ isSubmitting }) => {
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
                  className="dark:hover:text-zinc-900 hover:text-zinc-50 p-2 mx-2 flex justify-center items-center"
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
                        className="flex flex-col mb-8"
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
                            title.toLowerCase() === "year" ? "number" : "text"
                          }
                          className="mt-4 form-input bg-zinc-100 dark:bg-zinc-800 rounded-xl focus:ring-0 border-0"
                        />

                        <ErrorMessage
                          className="text-red-400 dark:text-red-500"
                          name={title.toLowerCase()}
                          component="p"
                        />
                      </label>
                    )
                  )}
                </>
              )}
            </Form>
          );
        }}
      </Formik>
    </Layout>
  );
};
