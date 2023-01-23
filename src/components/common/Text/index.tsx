import { Typography } from "@mui/material"
import { textProps } from "./type"
const Text = (props: textProps) => {
    const { children } = props
    return (
        <Typography {...props}>
            {children}
        </Typography>
    )
}
export default Text