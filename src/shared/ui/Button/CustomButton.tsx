import React from "react";
import { Button } from "antd";
import { CustomButtonProps } from "../../types/buttonTypes";

function CustomButton({
  title,
  pendingStatus,
  onClickAction,
  isDisabled,
  style,
}: CustomButtonProps) {
  const defaultStyle = {
    backgroundColor: "#1E6297",
    color: "white",
    padding: "17px",
    alignSelf: "flex-end",
  };

  return (
    <Button
      style={{
        ...defaultStyle,
        ...style,
      }}
      loading={pendingStatus}
      onClick={onClickAction}
      disabled={isDisabled}
    >
      {title}
    </Button>
  );
}

export default CustomButton;
