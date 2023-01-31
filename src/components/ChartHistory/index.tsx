import { ChartHistoryProps } from "./type";
import { StyledDiv } from "./style";
import ButtonGroup from "../common/ButtonGroup";
import Chart from "../common/Chart";
import { useState, useCallback, useEffect } from "react";

const selectedOption = [
  { label: "1 สัปดาห์", value: "oneWeek" },
  { label: "1 เดือน", value: "oneMonth" },
  { label: "3 เดือน", value: "threeMonth" },
];

const ChartHistory = (props: ChartHistoryProps) => {
  const { data, onSelected } = props;
  const [defaultValue, setDefaultValue] = useState("oneMonth");

  useEffect(() => {
    onSelected?.(defaultValue);
  }, [onSelected]);

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
        values={selectedOption}
      />
    </StyledDiv>
  );
};

export default ChartHistory;
