import React from "react";
import { Button } from "antd";
import { CustomButtonProps } from "../../types/buttonTypes";

function CustomButton({ title }: CustomButtonProps) {
  return (
    <Button
      style={{
        backgroundColor: "#1E6297",
        color: "white",
        padding: "17px",
        alignSelf: "flex-end",
      }}
    >
      {title}
    </Button>
  );
}

export default CustomButton;
