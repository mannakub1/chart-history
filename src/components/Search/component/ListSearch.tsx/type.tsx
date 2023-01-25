export type ListSearchProp = {
  list: ListType[];
  onClickItem: (name: string) => void;
};

export type ListType = {
  name: string;
  description: string;
};
