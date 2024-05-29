'use client';
import React, {useEffect, useState} from "react";
import {convertNovelToHtml} from "./helpers/editor-processor";
import {JSONContent} from "novel";
import {atou} from "@/toolkit/lib/utils";

export const htmlStringToReact = (html: string) => {
  return <div className={'rendered-html'} dangerouslySetInnerHTML={{__html: html}}/>;
}

type GeneratedHtmlProps = {
  base64Content: string;
}

export default function GeneratedHtml({base64Content}: GeneratedHtmlProps) {

  const [novelContent, setNovelContent] = useState<JSONContent>([]);
  useEffect(() => {
    try {
      const content = atou(base64Content);
      const parsedContent = content ? JSON.parse(content) : null;
      if (content) {
        setNovelContent(parsedContent);
      }
    } catch (e) {
      console.error(e);
    }
  }, [base64Content]);

  return htmlStringToReact(convertNovelToHtml(novelContent));
}