export type ListSearchProp = {
  list: ItemSearchListType[];
  onClickItem: (name: string) => void;
  scrollProp?: {
    isFetched?: boolean;
    isLoading?: boolean;
    hasNextPage?: boolean;
    onScroll?: any;
  };
};

export type ItemSearchListType = {
  name: string;
  description: string;
};
