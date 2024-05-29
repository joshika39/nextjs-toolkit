'use client'
import {formatTranslation as f} from "@/toolkit/i18n/utils"
import React, {useEffect, useState} from "react";

type LocalTimeProps = {
  date: Date | string | number;
  lang?: string;
  format?: string;
};

export function LocalTime({date, lang, format}: LocalTimeProps) {
  const [timezone, setTimezone] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  useEffect(() => {
    let _date = date;
    if (typeof date === "string" || typeof date === "number") {
      _date = new Date(date);
    }
    if (timezone) {
      const options = {
        timeZone: timezone
      } as Intl.DateTimeFormatOptions;
      setTime(_date.toLocaleString(lang, options));
    }
  }, [date, timezone, lang]);


  return (
    <div suppressHydrationWarning>
      {format ? f(format, {date: time}) : time}
    </div>
  );
}