export type ButtonGroupProps = {
  values: ValueType[];
  defaultValue: string;
  onSelected?: (value: string) => void;
};

export type ValueType = {
  label: string;
  value: string;
};
