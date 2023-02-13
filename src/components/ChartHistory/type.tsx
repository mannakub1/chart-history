import { ChartDataType } from "../common/Chart/type";

export type ChartHistoryProps = {
  period: string;
  data: ChartDataType[] | undefined;
  onSelected: (selectedValue: string) => void;
};
