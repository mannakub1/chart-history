import React from "react"
import { StyledChip } from "./style"
import { chipProps } from "./type"

const Chip: React.FC<chipProps> = ({ label }) => {
    return (
        <StyledChip label={label} />
    )
}

export default Chip