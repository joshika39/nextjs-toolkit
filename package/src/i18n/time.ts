import {formatStringTranslation as f} from '../i18n/utils'

export type FromNowLocale = {
  justNow: string;
  years: string;
  months: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  ago: string;
}

/**
 * Returns a string representing the time difference between the current time and the given date.
 * @param date
 * @param locales
 * @param includeSeconds
 */
export async function fromNowAsync(date: Date, locales: FromNowLocale, includeSeconds = false) {
  const currentTime = new Date();
  const diff = currentTime.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  if (years > 0) {
    return f(locales.years, {time: years}) + locales.ago;
  }

  if (months > 0) {
    return f(locales.months, {time: months}) + locales.ago;
  }

  if (days > 0) {
    return f(locales.days, {time: days}) + locales.ago;
  }

  if (hours > 5) {
    return f(locales.hours, {time: hours}) + locales.ago;
  }

  let full = '';

  if (hours > 0) {
    full += f(locales.hours, {time: hours % 24});
  }

  if (minutes > 0) {
    full += ` ${f(locales.minutes, {time: minutes % 60})}`;
  }

  if (includeSeconds && seconds > 0) {
    full += ` ${f(locales.seconds, {time: seconds % 60})}${locales.ago}`;
    return full;
  } else if (!includeSeconds && hours === 0 && minutes === 0) {
    return locales.justNow;
  } else if (!includeSeconds) {
    return full + locales.ago;
  }

  return locales.justNow;
}

export class TimeService {
  private readonly _fromNowLocale: FromNowLocale;

  public constructor(fromNowLocale: FromNowLocale) {
    this._fromNowLocale = fromNowLocale;
  }

  async fromNow(date: Date, includeSeconds = false) {
    return fromNowAsync(date, this._fromNowLocale, includeSeconds);
  }
}
