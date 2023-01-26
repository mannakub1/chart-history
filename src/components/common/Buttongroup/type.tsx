export type ButtonGroupProps = {
    buttonGroupValue: ValueType[];
    timeSelected: string;
    setTimeSelected: (value: string) => void;
};

export type ValueType = {
    label: string;
    value: string;
}