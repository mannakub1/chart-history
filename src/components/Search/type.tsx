import { ListType } from "./component/ListSearch.tsx/type";

export type SearchProps = {
  valueSearch: ListType[];
  onSearch?: (q: string) => void;
  setShowComponents: (bool: boolean) => void;
  showComponents: boolean;
};
