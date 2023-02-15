import { ChartHistoryProps } from "./type";
import { StyledDiv } from "./style";
import ButtonGroup from "../common/ButtonGroup";
import Chart from "../common/Chart";
import { useCallback, useMemo } from "react";

const ChartHistory = (props: ChartHistoryProps) => {
  const { data, buttonGroupValue, onSelected } = props;
  const onClickButtonGroup = useCallback(
    (selectedValue: string) => {
      onSelected(selectedValue);
    },
    [onSelected]
  );
  const getButtonGroupDefaultValue = useMemo((): string => {
    let defaultValue;
    buttonGroupValue.forEach((element) => {
      if (element.isDefault) {
        defaultValue = element.value;
      }
    });
    return defaultValue;
  }, [buttonGroupValue]);

  return (
    <StyledDiv>
      <Chart title="อัตราผลตอบแทน" data={data || []} />
      <ButtonGroup
        defaultValue={getButtonGroupDefaultValue}
        onSelected={onClickButtonGroup}
        values={buttonGroupValue}
      />
    </StyledDiv>
  );
};

export default ChartHistory;
