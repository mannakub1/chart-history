import { ChartDataType } from "../common/Chart/type";

export type ChartHistoryProps = {
  data: ChartDataType[] | undefined;
  onSelected: (selectedValue: string) => void;
};
