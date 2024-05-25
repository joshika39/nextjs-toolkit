import * as React from "react";
export type ComboboxItem<T> = {
    value: T;
    valueString: string;
    label: string;
};
export type ComboboxLocale = {
    notSelected: string;
    notFound: string;
    placeholder: string;
    label: string;
};
export type ComboboxProps<T> = {
    items: ComboboxItem<T>[];
    initialValue: T | null;
    locale: ComboboxLocale;
    onChange?: (value: T) => void;
};
export declare function Combobox<T>({ items, initialValue, locale, onChange }: ComboboxProps<T>): React.JSX.Element;
