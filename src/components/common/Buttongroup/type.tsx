export type ButtonGroupProps = {
    timeSelected: string;
    setTimeSelected: (value: string) => void;
    buttonGroupValue: { label: string, value: string }[];
};