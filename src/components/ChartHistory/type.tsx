import { ChartDataType } from "../common/Chart/type";

export type ChartHistoryProps = {
  data: ChartDataType[];
  onSelected: (selectedValue: string) => void;
};
