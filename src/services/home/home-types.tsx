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
