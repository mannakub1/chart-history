import { StyledButtonGroup, StyledButton } from './style'
import { ButtonGroupProps } from './type';

export const ButtonGroup = (props: ButtonGroupProps) => {
    const { selected, setSelected } = props
    const handleSelected = (_event, updateFormats) => {
        if (updateFormats != null) {
            setSelected(updateFormats);
        }
    }
    const buttonGroupValue = ['1 สัปดาห์', '1 เดือน', '3 เดือน'];

    return (
        <StyledButtonGroup
            value={selected}
            onChange={handleSelected}
            exclusive
        >
            {buttonGroupValue.map((buttonLabel) => {
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
