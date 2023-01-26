import { StyledButtonGroup, StyledButton } from './style'
import { ButtonGroupProps } from './type';
import { useCallback } from 'react';

export const ButtonGroup = (props: ButtonGroupProps) => {
    const { timeSelected, setTimeSelected, buttonGroupValue } = props

    const handleSelected = useCallback((_event, value) => {
        if (value != null) {
            setTimeSelected(value);
        }
    }, [setTimeSelected])
    return (
        <StyledButtonGroup
            value={timeSelected}
            onChange={handleSelected}
            exclusive
        >
            {buttonGroupValue.map((buttonGroupValue) => {
                return (
                    <StyledButton
                        key={buttonGroupValue.value}
                        disableFocusRipple={true}
                        disableRipple={true}
                        size="small"
                        value={buttonGroupValue.value}
                    >
                        {buttonGroupValue.label}
                    </StyledButton>
                )
            })}
        </StyledButtonGroup>
    );
};

export default ButtonGroup;