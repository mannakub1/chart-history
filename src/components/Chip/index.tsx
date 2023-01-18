import { StyledChip } from "./style"
import { ChipProps } from "./type"

const Chip = (props: ChipProps) => {
    const { label } = props
    return (
        <StyledChip label={label} />
    )
}

export default Chip