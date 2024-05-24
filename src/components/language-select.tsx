'use client'

import {usePathname, useSearchParams} from 'next/navigation'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './ui/dropdown-menu';
import {Button} from './ui/button';
import {LanguagesIcon} from "lucide-react";
import {Language} from "@/types.ts";

type Locale = {
  languageSelect: string;
  inReview: string;
  waitingForContributions: string;
}

export interface LanguageSelectProps {
  languages: Language[];
  locale: Locale;
}

export default function LanguageSelect(props: LanguageSelectProps) {
  const {languages, locale: {languageSelect, inReview, waitingForContributions}} = props;

  const pathName = usePathname()
  const searchParams = useSearchParams();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    const url = segments.join('/');
    const params = new URLSearchParams(searchParams.toString())
    return `${url}?${params.toString()}`
  }

  const extendLocaleIfNecessary = (locale: Language) => {
    if (locale.isNotStarted) {
      return `${locale.name} (${waitingForContributions})`
    }

    if (locale.isInReview) {
      return `${locale.name} (${inReview})`
    }

    return locale.name;
  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" paddingH={'sm'}><LanguagesIcon className={'h-5 w-5'}/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{languageSelect}</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        {languages.map(locale => {
          const disabled = locale.isNotStarted || !locale.isCompleted || locale.isInReview;
          return (
            <DropdownMenuItem key={locale.code} disabled={disabled} asChild>
              <Link href={redirectedPathName(locale.code)}>
                {extendLocaleIfNecessary(locale)}
              </Link>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}