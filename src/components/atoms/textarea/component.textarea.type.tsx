export interface InputInterface {
  id: string;
  name: string;
  error: Object;
  pattern?: Object;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  register: (...props: any) => void;
}

export interface InputStyledInterface {
  error: boolean;
}
