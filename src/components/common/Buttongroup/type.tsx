export type ButtonGroupProps = {
  values: ButtonGroupValueType[];
  defaultValue: string;
  onSelected?: (value: string) => void;
};

export type ButtonGroupValueType = {
  label: string;
  value: PeriodType;
  isDefault: boolean;
};

export type PeriodType = string | null | undefined;
