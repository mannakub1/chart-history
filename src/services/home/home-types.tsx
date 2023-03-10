export type SearchBondResponse = {
  thaiSymbol: string;
  nameTh: string;
  nameEn: string;
};

type Paging = {
  page: number;
  nextPage: number;
};

export type SymbolType = {
  thaiSymbol: string;
  nameTh: string;
};

export type SymbolListType = {
  data: SymbolType[];
};

export type SearchBondPagingResponse = ResponseWithPaging<SearchBondResponse[]>;
export type SearchSymbolPagingResponse = ResponseWithPaging<
  SymbolType[] | undefined
>;

type ResponseWithPaging<T> = {
  data: T;
  paging: Paging;
};
export type OffsetType = {
  offset: number;
};

export type GetBondRequest = {
  period: string;
  thaiSymbol: string | (string | null)[];
  bondType: string;
};

export type GetSearchBondRequest = {
  q?: string;
  bondType: string;
};

export type ChartResponse = {
  avgYield: string;
  settlementDate: string;
};

export type OverallResponse = {
  value: string;
  label: string;
};

export type ChartTypeResponse = {
  past1Week: ChartResponse[];
  past1Month: ChartResponse[];
  past3Months: ChartResponse[];
};

export type GetBondFromFileResponse = {
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
  yieldPrices: ChartTypeResponse;
  overallAvg: OverallResponse[];
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
