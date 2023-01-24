import { Typography } from "@mui/material"
import { TextProps } from "./type"
const Text = (props: TextProps) => {
    const { children, weight = 400, color, lineHeight = '24px', size = '16px' } = props
    return (
        <Typography fontWeight={weight} lineHeight={lineHeight} fontSize={size} color={color} >
            {children}
        </Typography>
    )
}
export default Text