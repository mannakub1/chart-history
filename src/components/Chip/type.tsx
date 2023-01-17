
export type ChipProps = {
    variant?: "outlined" | "filled" | undefined;
    color?: "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined;
    size?: "small" | "medium" | undefined;
    avatar?: JSX.Element;
    label: string;
    deleteIcon?: React.ReactElement;
    onDelete?: () => void;
    onClick?: () => void;
}

