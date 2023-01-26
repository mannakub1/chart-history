import { StyledButtonGroup, StyledButton } from "./style";
import { ButtonGroupProps } from "./type";
import { useCallback, useState } from "react";

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { defaultValue, values, onSelected: onSelectedProp } = props;
  const [selected, setSelected] = useState(defaultValue);

  const handleSelected = useCallback(
    (_event, value) => {
      if (value != null) {
        setSelected(value);
        onSelectedProp?.(value);
      }
    },
    [onSelectedProp, setSelected]
  );

  return (
    <StyledButtonGroup value={selected} onChange={handleSelected} exclusive>
      {values.map((v) => {
        const { value, label } = v;
        return (
          <StyledButton
            key={value}
            disableFocusRipple={true}
            disableRipple={true}
            size="small"
            value={value}
          >
            {label}
          </StyledButton>
        );
      })}
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
