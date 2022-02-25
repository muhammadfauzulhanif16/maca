export interface InputsState {
  label: string;
  type: string;
}

export const Inputs: InputsState[] = [
  { label: "Title", type: "text" },
  { label: "Author", type: "text" },
  { label: "Year", type: "number" },
  { label: "Completed", type: "checkbox" },
];
