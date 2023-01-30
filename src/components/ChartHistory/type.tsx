export type ChartHistoryProps = {
  data: DataType[];
  onSelected: (selectedValue: string) => void;
};

export type DataType = {
  date: string;
  value: number;
};
