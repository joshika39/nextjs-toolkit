import React from "react";
type LocalTimeProps = {
    date: Date | string | number;
    lang?: string;
    format?: string;
};
export declare function LocalTime({ date, lang, format }: LocalTimeProps): React.JSX.Element;
export {};
