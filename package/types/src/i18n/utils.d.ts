import React from "react";
export type TranslationComponent = {
    key: string;
    type: string | any;
    rest: object;
};
/**
 * Formats a translation string with the given values.
 * {{name}} will be replaced with the value of values.name
 * @param translation
 * @param values
 * @returns {React.ReactNode} The formatted translation converted to React elements.
 */
export declare function formatTranslation(translation: string, values?: Record<string, any>): React.ReactNode;
/**
 * Formats a translation string with the given values.
 * @param translation
 * @param values
 * @returns {string} The formatted translation.
 */
export declare function formatStringTranslation(translation: string, values?: Record<string, any>): string;
/**
 * Replaces a component in a translation string with the given component.
 * @param translation
 * @param component
 */
export declare function replaceComponent(translation: string, component: TranslationComponent): React.FunctionComponentElement<{
    children?: React.ReactNode;
}>;
/**
 * Replaces components in a translation string with the given components.
 * @param translation
 * @param components
 */
export declare function replaceComponents(translation: string, components: TranslationComponent[]): React.FunctionComponentElement<{
    children?: React.ReactNode;
}>;
export declare const timeZones: {
    "0": string;
    "1": string;
};
