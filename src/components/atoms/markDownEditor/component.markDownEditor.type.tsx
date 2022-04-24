export interface MarkDownEditorTypes {
  id: string;
  name: string;
  error: Object;
  pattern?: Object;
  multiple?: boolean;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  setValue: (...props: any) => void;
  register: (...props: any) => void;
}

export interface InputStyledInterface {
  error: boolean;
}
