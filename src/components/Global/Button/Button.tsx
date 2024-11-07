import * as React from "react";
import {
  Button as FuiButton,
  ButtonProps,
  mergeClasses,
} from "@fluentui/react-components";
import { useBtnClasses } from "./style";

export interface IButton {
  text: string;
}

export const Button = (props: ButtonProps) => {
  const btnClasses = useBtnClasses();
  
  return (
    <>
      <FuiButton
        {...props}
        className={mergeClasses(
          btnClasses[props.appearance],
          btnClasses.button,
          props.className && props.className
        )}
        appearance={
          props.appearance === "transparent" || props.appearance === "subtle"
            ? props.appearance
            : "secondary"
        }
      >
        {props.children}
      </FuiButton>
    </>
  );
};

export default Button;
