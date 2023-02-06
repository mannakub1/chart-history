export type ChartProps = {
  data: ChartDataType[];
  title: string;
};

export type ChartDataType = {
  avgYield: string;
  settlementDate: string;
};

export type DataArray = [number?];

export type DateArray = [string?];
