import { Typography } from "@mui/material";
import { TextProps } from "./type";
import { BLACK_212121 } from "../../../constants/colors";
const Text = (props: TextProps) => {
  const {
    children,
    className,
    color = BLACK_212121,
    lineHeight = "24px",
    size = "16px",
    weight = 400,
  } = props;
  return (
    <Typography
      className={className}
      color={color}
      fontWeight={weight}
      lineHeight={lineHeight}
      fontSize={size}
    >
      {children}
    </Typography>
  );
};
export default Text;
