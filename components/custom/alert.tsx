"use server";

import {RiInformationLine, RiErrorWarningLine, RiAlarmWarningLine, RiLightbulbFlashLine} from "@remixicon/react";
import {cn} from "../../lib/utils";
import React from "react";
import {Alert, AlertDescription, AlertTitle} from "../ui/alert";

export type AlertLocale = {
  info: string;
  warning: string;
  error: string;
  success: string;
  dyk: string;
}

type AlertProps = {
  titles: AlertLocale;
  description: string | React.ReactNode;
  severity?: "info" | "warning" | "error" | "success" | "dyk";
};

export default async function FAlert({titles, description, severity = "info"}: AlertProps) {
  const getTitle = (severity: "info" | "warning" | "error" | "success" | "dyk") => {
    switch (severity) {
      case "info":
        return titles.info;
      case "warning":
        return titles.warning;
      case "error":
        return titles.error;
      case "success":
        return titles.success;
      case "dyk":
        return titles.dyk;
    }
  }

  const getIcon = (severity: "info" | "warning" | "error" | "success" | "dyk") => {
    switch (severity) {
      case "info":
        return <RiInformationLine className="accent-blue-500 h-5 w-5"/>;
      case "warning":
        return <RiErrorWarningLine className="text-yellow-500 h-5 w-5"/>;
      case "error":
        return <RiAlarmWarningLine className="accent-destructive h-5 w-5"/>;
      case "success":
        return <RiLightbulbFlashLine className="text-green-500 h-5 w-5"/>;
      case "dyk":
        return <RiLightbulbFlashLine className="text-purple-700 h-5 w-5 bg-blue bg-y"/>;
    }
  }

  const getColor = (severity: "info" | "warning" | "error" | "success" | "dyk") => {
    switch (severity) {
      case "info":
        return "bg-blue-100 text-blue-800 border-blue-500 dark:bg-background dark:text-blue-300";
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-500 dark:text-white dark:bg-background dark:text-yellow-500";
      case "error":
        return "bg-red-100 text-red-800 border-red-500 dark:bg-red-500 dark:text-white";
      case "success":
        return "bg-green-100 text-green-800 border-green-500 dark:bg-green-500 dark:text-white";
      case "dyk":
        return "bg-purple-100 text-purple-800 border-purple-500 dark:bg-purple-500 dark:text-white";
    }

  }

  return (
    <Alert className={cn(
      getColor(severity),
      "my-4"
    )}>
      <div className='absolute right-4 top-4'>
        {getIcon(severity)}
      </div>
      <AlertTitle>{getTitle(severity)}</AlertTitle>
      <AlertDescription>
        {description}
      </AlertDescription>
    </Alert>
  )
}