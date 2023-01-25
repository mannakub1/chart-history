export type SearchProps = {
  onSearch?: (q: string) => void;
  setShowComponents: (bool: boolean) => void;
  showComponents: boolean;
};