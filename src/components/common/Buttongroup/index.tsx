import { StyledTabs, StyledTab } from "./style";
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
    <StyledTabs value={selected} onChange={handleSelected}>
      {values.map((v) => {
        const { value, label } = v;
        return (
          <StyledTab key={value} value={value} disableRipple label={label} />
        );
      })}
    </StyledTabs>
  );
};

export default ButtonGroup;
