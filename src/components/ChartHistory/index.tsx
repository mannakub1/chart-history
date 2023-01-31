import { ChartHistoryProps } from "./type";
import { StyledDiv } from "./style";
import ButtonGroup from "../common/ButtonGroup";
import Chart from "../common/Chart";
import { useState, useCallback, useEffect } from "react";

const buttonGroupValue = [
  { label: "1 สัปดาห์", value: "oneWeek" },
  { label: "1 เดือน", value: "oneMonth" },
  { label: "3 เดือน", value: "threeMonth" },
];

const ChartHistory = (props: ChartHistoryProps) => {
  const { data, onSelected } = props;
  const [selectedOption, setSelectedOption] = useState("oneMonth");

  useEffect(() => {
    onSelected?.(selectedOption);
  }, [onSelected, selectedOption]);

  const onClickButtonGroup = useCallback(
    (selectedValue: string) => {
      setSelectedOption(selectedValue);
    },
    [setSelectedOption]
  );

  return (
    <StyledDiv>
      <Chart title="อัตราผลตอบแทน" data={data} />
      <ButtonGroup
        defaultValue={selectedOption}
        onSelected={onClickButtonGroup}
        values={buttonGroupValue}
      />
    </StyledDiv>
  );
};

export default ChartHistory;
