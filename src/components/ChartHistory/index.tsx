import { ChartHistoryProps } from "./type";
import { StyledDiv } from "./style";
import ButtonGroup from "../common/ButtonGroup";
import Chart from "../common/Chart";
import { useCallback } from "react";

const getDefaultValue = (arr) => {
  let defaultValue;
  arr.forEach((element) => {
    if (element.isDefault) {
      defaultValue = element.value;
    }
  });
  return defaultValue;
};

const ChartHistory = (props: ChartHistoryProps) => {
  const { data, buttonGroupValue, onSelected } = props;
  const onClickButtonGroup = useCallback(
    (selectedValue: string) => {
      onSelected(selectedValue);
    },
    [onSelected]
  );

  return (
    <StyledDiv>
      <Chart title="อัตราผลตอบแทน" data={data || []} />
      <ButtonGroup
        defaultValue={getDefaultValue(buttonGroupValue)}
        onSelected={onClickButtonGroup}
        values={buttonGroupValue}
      />
    </StyledDiv>
  );
};

export default ChartHistory;
