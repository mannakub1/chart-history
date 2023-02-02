export type ChartProps = {
  data: ChartDataType[];
  title: string;
};

export type ChartDataType = {
  date: string;
  value: number | null;
};

export type DataArray = [number?];

export type DateArray = [string?];
