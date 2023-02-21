import { ChartDataType } from "../common/Chart/type";
import { ButtonGroupValueType } from "../common/ButtonGroup/type";

export type ChartHistoryProps = {
  buttonGroupValue: ButtonGroupValueType[];
  data: ChartDataType[] | undefined;
  onSelected: (selectedValue: string) => void;
};

export enum ButtonGroupValue {
  ONE_WEEK = "past_1_week",
  ONE_MONTH = "past_1_month",
  THREE_MONTH = "past_3_months",
}
