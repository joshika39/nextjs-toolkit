import React from "react";
export type AlertLocale = {
    info: string;
    warning: string;
    error: string;
    success: string;
    dyk: string;
};
type AlertProps = {
    titles: AlertLocale;
    description: string | React.ReactNode;
    severity?: "info" | "warning" | "error" | "success" | "dyk";
};
export default function FAlert({ titles, description, severity }: AlertProps): Promise<React.JSX.Element>;
export {};
