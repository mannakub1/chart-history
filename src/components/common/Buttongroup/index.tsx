import { StyledTabs, StyledTab } from "./style";
import { ButtonGroupProps, ButtonGroupValueType } from "./type";
import { useCallback, useState } from "react";

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { defaultValue, values, onSelected: onSelectedProp } = props;

  const [selected, setSelected] = useState(defaultValue);

  const onSelected = useCallback(
    (_event, value) => {
      if (value != null) {
        setSelected(value);
        onSelectedProp?.(value);
      }
    },
    [onSelectedProp, setSelected]
  );

  return (
    <>
      <StyledTabs value={selected} onChange={onSelected}>
        {values?.map(({ value, label }: ButtonGroupValueType, index) => {
          return (
            <StyledTab key={index} value={value} label={label} disableRipple />
          );
        })}
      </StyledTabs>
    </>
  );
};

export default ButtonGroup;
