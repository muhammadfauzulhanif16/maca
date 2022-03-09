import { Field, Form } from "formik";
import { Layout } from "../common/Layout";
import { Formik } from "formik";
import { ArrowEnterLeft } from "@emotion-icons/fluentui-system-regular";
import { useDispatch } from "react-redux";
import { createBookAct } from "../../store/actions/book";
import { useNavigate } from "react-router-dom";
import { IconButton } from "../common/IconButton";

export const AddComponent = () => {
  const dispatch = useDispatch(),
    navigate = useNavigate(),
    Inputs = ["Title", "Author", "Year"];

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
          }, 3000);
        }}
      >
        <Form>
          <div className="my-8 flex justify-between">
            <p className="text-3xl font-medium">Add</p>

            <IconButton
              className="cursor-pointer font-medium shadow-xl py-2 bg-cyan-400 dark:bg-cyan-500 hover:bg-cyan-500 hover:bg-cyan-400 dark:hover:text-zinc-900 hover:text-zinc-50 px-4 rounded-xl flex items-center"
              icon={<ArrowEnterLeft width={24} />}
              text="Submit"
              textClass="ml-4"
              type="submit"
            />
          </div>

          {Inputs.map((title, id) => (
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
          ))}
        </Form>
      </Formik>
    </Layout>
  );
};
