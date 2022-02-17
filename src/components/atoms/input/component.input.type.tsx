export enum enumInputType {
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
  pattern?: Object;
  required?: boolean;
  placeholder?: string;
  type: enumInputType;
  defaultValue?: string;
  register: (...props: any) => void;
}

export interface InputStyledInterface {
  error: boolean;
}
