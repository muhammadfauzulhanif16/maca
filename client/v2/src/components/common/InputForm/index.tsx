import { FC } from "react";
import { Field } from "formik";

interface InputFormProps {
  label: string;
  type: string;
}

export const InputForm: FC<InputFormProps> = ({ label, type }): JSX.Element => {
  const identifier =
    type !== "checkbox" ? label.toLowerCase() : `is_${label.toLowerCase()}`;

  return (
    <label
      htmlFor={label}
      className={`${
        type !== "checkbox" ? "block" : "inline-flex items-center"
      }`}
    >
      {type !== "checkbox" ? <span>{label}</span> : ""}

      <Field
        type={type}
        name={identifier}
        id={identifier}
        placeholder={`Enter the ${label.toLowerCase()} book`}
        className={`${
          type === "checkbox"
            ? "form-checkbox "
            : "form-input mt-1 block w-full "
        } bg-slate-200 rounded-md border-0`}
      />

      {type === "checkbox" ? (
        <span className="ml-2">Is {label.toLowerCase()}?</span>
      ) : (
        ""
      )}
    </label>
  );
};
