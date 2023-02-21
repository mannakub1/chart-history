import { ItemSearchListType } from "./component/ListSearch.tsx/type";

export type SearchProps = {
  valueSearch: ItemSearchListType[];
  onSearch?: (q: string) => void;
  onSelected?: (q: string) => void;
  setShowComponents: (bool: boolean) => void;
  showComponents: boolean;
  scrollProp?: {
    isFetched?: boolean;
    isLoading?: boolean;
    hasNextPage?: boolean;
    onScroll?: any;
  };
};
