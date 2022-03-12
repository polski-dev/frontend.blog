export interface InputInterface {
  id: string;
  name: string;
  error: Object;
  pattern?: Object;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean | string;
  register: (...props: any) => void;
}

export interface InputStyledInterface {
  error: boolean;
}
