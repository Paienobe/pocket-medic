export type ButtonProps = {
  text: string;
  bg_color?: string;
  text_color?: string;
  hover_bg_color?: string;
  className?: string;
  disabled?: boolean;
  clickFunction: () => void;
};
