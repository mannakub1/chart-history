export type SearchBondResponse = {
  thaiSymbol: string;
  nameTh: string;
  nameEn: string;
};

type Paging = {
  page: number;
  nextPage: number;
};

export type SearchBondPagingResponse = ResponseWithPaging<SearchBondResponse[]>;

type ResponseWithPaging<T> = {
  data: T;
  paging: Paging;
};
export type OffsetType = {
  offset: number;
};

export type GetBondRequest = {
  period: string;
  thaiSymbol: string | (string | null)[] | null | undefined;
};

export type ChartResponse = {
  avgYield: string;
  settlementDate: string;
};

export type OverallResponse = {
  value: string;
  label: string;
};

export type GetBondResponse = {
  mmCode: string;
  thaiSymbol: string;
  nameEn: string;
  nameTh: string;
  issueDate: string;
  maturityDate: string;
  bondType: string;
  bondRiskLevel: string;
  bondRemainingAge: string;
  issuerImageUrl: string;
  originalParValue: string;
  parValue: string;
  minimumUnit: string;
  incrementUnit: string;
  couponPayment: string;
  couponFrequency: string;
  bondAge: string;
  coupons: string;
  couponRate: string;
  yieldPrices: ChartResponse[];
  overallAvg: OverallResponse[];
};
