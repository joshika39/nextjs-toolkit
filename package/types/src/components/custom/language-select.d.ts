import { Language } from "types";
import React from 'react';
type Locale = {
    languageSelect: string;
    inReview: string;
    waitingForContributions: string;
};
export interface LanguageSelectProps {
    languages: Language[];
    locale: Locale;
}
export default function LanguageSelect(props: LanguageSelectProps): React.JSX.Element;
export {};
