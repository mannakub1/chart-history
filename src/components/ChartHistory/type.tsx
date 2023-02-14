import { ChartDataType } from "../common/Chart/type";
import { ButtonGroupValueType } from "../common/ButtonGroup/type";

export type ChartHistoryProps = {
  buttonGroupValue: ButtonGroupValueType[];
  data: ChartDataType[] | undefined;
  onSelected: (selectedValue: string) => void;
};
