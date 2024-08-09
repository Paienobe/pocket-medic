export type InputProps = {
  value: string;
  placeholder: string;
  className?: string;
  type?: string;
  required?: boolean;
  changeFunc: (value: any) => void;
};
