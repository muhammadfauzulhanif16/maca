import { FC } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Inputs } from "./Inputs";
import { RootState } from "../../store";
import { createBookAct } from "../../store/actions/book";
import { Header, InputForm } from "../../components";

interface AddComponentProps {
  titlePage?: string;
}

export const AddComponent: FC<AddComponentProps> = ({ titlePage }) => {
  const dispatch = useDispatch(),
    { books } = useSelector(({ book }: RootState) => book);

  return (
    <>
      <Header title={titlePage} count={books.length} />

      <Formik
        initialValues={{
          title: "",
          author: "",
          year: "",
          is_completed: false,
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(createBookAct(values));
          resetForm();
        }}
      >
        <div className="flex items-center justify-center absolute right-0 left-0 top-0 h-screen p-4 sm:p-6 md:p-8">
          <Form className="grid grid-cols-1 gap-6 sm:w-3/4 md:w-2/3 lg:w-1/2">
            {Inputs.map(({ label, type }, id) => (
              <InputForm key={id} label={label} type={type} />
            ))}

            <button
              type="submit"
              className="p-2 block w-full font-medium bg-slate-200 outline-0 rounded-md"
            >
              Submit
            </button>
          </Form>
        </div>
      </Formik>
    </>
  );
};
