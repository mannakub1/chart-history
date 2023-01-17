import { Chip } from "@mui/material"
import React from "react"
import { ChipStyle } from "./style"
import { ChipProps } from "./type"
const BondChip: React.FC<ChipProps> = ({
    variant,
    color,
    size,
    avatar,
    deleteIcon,
    label,
    onDelete,
    onClick
}) => {
    return (
        <Chip
            variant={variant}
            color={color}
            size={size}
            label={label}
            deleteIcon={deleteIcon}
            onDelete={onDelete}
            onClick={onClick}
            avatar={avatar}
            sx={ChipStyle}
        />

    )
}

export default BondChip