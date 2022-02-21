import { FC } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Inputs, InputsState } from "./Inputs";
import { RootState } from "../../store";
import { createBookAct } from "../../store/actions/book";
import { Header, InputForm } from "../../components";
import "./index.scss";

interface AddComponentProps {
  titlePage?: string;
  books: [];
}

interface initialValuesState {
  title: string;
  author: string;
  year: string;
  is_completed: boolean;
}

const initialValues: initialValuesState = {
  title: "",
  author: "",
  year: "",
  is_completed: false,
};

export const AddComponent: FC<AddComponentProps> = ({
  titlePage,
  books,
}): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <>
      <Header title={titlePage} count={books.length} />

      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }): void => {
          dispatch(createBookAct(values));
          resetForm();
        }}
      >
        <div className="form-container">
          <Form className="form">
            {Inputs.map(
              ({ label, type }: InputsState, id: number): JSX.Element => (
                <InputForm key={id} label={label} type={type} />
              )
            )}

            <button type="submit" className="submit">
              Submit
            </button>
          </Form>
        </div>
      </Formik>
    </>
  );
};
