export type ChartProps = {
  data: DataType[];
  title: string;
};

export type DataType = {
  date: string;
  value: number | null;
};

export type DataArray = [number?];

export type DateArray = [string?];
