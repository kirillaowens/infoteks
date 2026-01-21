import { CSSProperties } from "react";

export type CustomButtonProps = {
  title: string;
  onClickAction?: () => void;
  pendingStatus?: boolean;
  isDisabled?: boolean;
  style?: CSSProperties;
};
