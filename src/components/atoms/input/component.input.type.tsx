export enum enumInputType {
  fname = "fname",
  lname = "lname",
  checkbox = "checkbox",
  color = "color",
  date = "date",
  email = "email",
  file = "file",
  hidden = "hidden",
  image = "image",
  month = "month",
  number = "number",
  password = "password",
  radio = "radio",
  range = "range",
  reset = "reset",
  search = "search",
  submit = "submit",
  tel = "tel",
  text = "text",
  time = "time",
  url = "url",
  week = "week",
}

export interface InputInterface {
  id: string;
  name: string;
  error: Object;
  accept?: string;
  pattern?: Object;
  multiple?: boolean;
  required?: boolean;
  placeholder?: string;
  type: enumInputType;
  defaultValue?: string;
  register: (...props: any) => void;
}

export interface InputStyledInterface {
  error: boolean;
}
