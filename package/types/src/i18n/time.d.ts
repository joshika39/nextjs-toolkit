export type FromNowLocale = {
    justNow: string;
    years: string;
    months: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    ago: string;
};
/**
 * Returns a string representing the time difference between the current time and the given date.
 * @param date
 * @param locales
 * @param includeSeconds
 */
export declare function fromNowAsync(date: Date, locales: FromNowLocale, includeSeconds?: boolean): Promise<string>;
export declare class TimeService {
    private readonly _fromNowLocale;
    constructor(fromNowLocale: FromNowLocale);
    fromNow(date: Date, includeSeconds?: boolean): Promise<string>;
}
