export type ButtonGroupProps = {
  values: ButtonGroupValueType[];
  defaultValue: string;
  onSelected?: (value: string) => void;
};

export type ButtonGroupValueType = {
  label: string;
  value: string | null | undefined;
  isDefault: boolean;
};
