import { ChartHistoryProps } from "./type";
import { StyledDiv } from "./style";
import ButtonGroup from "../common/ButtonGroup";
import Chart from "../common/Chart";
import { useCallback } from "react";

const buttonGroupValue = [
  { label: "1 สัปดาห์", value: "past_1_week" },
  { label: "1 เดือน", value: "past_1_month" },
  { label: "3 เดือน", value: "past_3_months" },
];

const ChartHistory = (props: ChartHistoryProps) => {
  const { data, period, onSelected } = props;
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
        defaultValue={period}
        onSelected={onClickButtonGroup}
        values={buttonGroupValue}
      />
    </StyledDiv>
  );
};

export default ChartHistory;
