import { ChartHistoryProps } from "./type";
import { StyledDiv } from "./style";
import ButtonGroup from "../common/Buttongroup";
import Chart from "../common/Chart";
import { useState, useCallback } from "react";

const buttonGroupValue = [
  { label: "1 สัปดาห์", value: "oneWeek" },
  { label: "1 เดือน", value: "oneMonth" },
  { label: "3 เดือน", value: "threeMonth" },
];

const ChartHistory = (props: ChartHistoryProps) => {
  const { data, onSelected } = props;
  const [defaultValue, setDefaultValue] = useState("oneMonth");

  const onClickButtonGroup = useCallback(
    (selectedValue: string) => {
      setDefaultValue(selectedValue);
      onSelected?.(selectedValue);
    },
    [setDefaultValue, onSelected]
  );

  return (
    <StyledDiv>
      <Chart title="อัตราผลตอบแทน" data={data} />
      <ButtonGroup
        defaultValue={defaultValue}
        onSelected={onClickButtonGroup}
        values={buttonGroupValue}
      />
    </StyledDiv>
  );
};

export default ChartHistory;
