import { StyledButtonGroup, StyledButton } from './style'
import { ButtonGroupProps } from './type';
import { useCallback } from 'react';

export const ButtonGroup = (props: ButtonGroupProps) => {
    const { selected, setSelected } = props
    const buttonGroupByTime = ['1 สัปดาห์', '1 เดือน', '3 เดือน'];

    const handleSelected = (_event, updateFormats) => {
        if (updateFormats != null) {
            setSelected(updateFormats);
        }
    }
    return (
        <StyledButtonGroup
            value={selected}
            onChange={handleSelected}
            exclusive
        >
            {buttonGroupByTime.map((buttonLabel) => {
                return (
                    <StyledButton
                        disableFocusRipple={true}
                        disableRipple={true}
                        size="small"
                        value={buttonLabel}
                    >
                        {buttonLabel}
                    </StyledButton>
                )
            })}
        </StyledButtonGroup>
    );
};

export default ButtonGroup;