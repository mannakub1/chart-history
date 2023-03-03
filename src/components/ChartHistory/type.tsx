import { ChartDataType } from "../common/Chart/type";
import { ButtonGroupValueType } from "../common/ButtonGroup/type";

export type ChartHistoryProps = {
  buttonGroupValue: ButtonGroupValueType[];
  data: ChartDataType[] | undefined;
  onSelected: (selectedValue: string) => void;
};

export enum ButtonGroupValue {
  ONE_WEEK = "past1Week",
  ONE_MONTH = "past1Month",
  THREE_MONTH = "past3Months",
}
