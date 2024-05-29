"use client";
import React, {useEffect, useState} from "react";
import {
  EditorRoot,
  EditorCommand,
  EditorCommandItem,
  EditorCommandEmpty,
  EditorContent,
  type JSONContent,
  EditorInstance,
  EditorCommandList,
} from "novel";
import {defaultExtensions} from "./extensions";
import {Separator} from "@/toolkit/components/separator";
import {NodeSelector} from "./selectors/node-selector";
import {LinkSelector} from "./selectors/link-selector";
import {ColorSelector} from "./selectors/color-selector";

import {TextButtons} from "./selectors/text-buttons";
import {slashCommand, suggestionItems} from "./slash-command";
import GenerativeMenuSwitch from "./generative/generative-menu-switch";
import {handleImageDrop, handleImagePaste} from "novel/plugins";
import {uploadFn} from "./image-upload";
import {Range} from '@tiptap/core';
import {convertNovelToHtml} from "./helpers/editor-processor";
import {Button} from "@/toolkit/components/button";
import {defaultEditorContent} from "@/toolkit/lib/defaults";
import {handleCommandNavigation, ImageResizer, SuggestionItem} from "novel/extensions";

const extensions = [...defaultExtensions, slashCommand];

type AdvancedEditorProps = {
  storagePath?: string;
  savedLabelPosition?: 'left' | 'right';
  banner?: {
    content: React.ReactNode;
    side: 'left' | 'right';
  },
  htmlContent?: string;
  jsonContent?: JSONContent;
  setHtmlContent?: (html: string) => void;
  setJsonContent?: (json: JSONContent) => void;
}

// TODO: Localize the editor
const Editor = ({
                  savedLabelPosition = 'right',
                  storagePath = 'ablaze.lobby.temp-novel',
                  htmlContent,
                  setHtmlContent,
                  jsonContent,
                  setJsonContent,
                  banner
                }: AdvancedEditorProps) => {
  const [initialContent, setInitialContent] = useState<null | JSONContent>(
    null,
  );
  const [saveStatus, setSaveStatus] = useState("保存済み");
  const [openNode, setOpenNode] = useState(false);
  const [openColor, setOpenColor] = useState(false);
  const [openLink, setOpenLink] = useState(false);
  const [openAI, setOpenAI] = useState(false);
  const [internalJsonContent, setInternalJsonContent] = useState<JSONContent>([]);

  const onClickSave = () => {
    setSaveStatus("保存中...");
    localStorage.setItem(storagePath, JSON.stringify(internalJsonContent));
    setSaveStatus("保存済み");
  }

  useEffect(() => {
    const content = jsonContent ? JSON.stringify(jsonContent) : localStorage.getItem(storagePath);
    if (content) {
      setInitialContent(JSON.parse(content));
      const html = convertNovelToHtml(JSON.parse(content));
      if(setHtmlContent){
        setHtmlContent(html);
      }
    } else {
      setInitialContent(defaultEditorContent);
      const html = convertNovelToHtml(defaultEditorContent);
      if(setHtmlContent){
        setHtmlContent(html);
      }
    }
  }, []);

  if (!initialContent) {
    return <></>;
  }

  const handleCommand = (item: SuggestionItem, val: { editor: EditorInstance, range: Range }) => {
    if (!item?.command) {
      return
    }
    item.command(val)
  }

  const bannerDiv = () => {
    if (!banner) {
      return <></>;
    }

    let bannerPositionClass = banner.side === 'left' ? 'left-5' : 'right-5';

    bannerPositionClass = banner.side === savedLabelPosition ? `${bannerPositionClass} top-[4.5rem]` : `${bannerPositionClass} top-5`


    return <div className={`absolute ${bannerPositionClass} z-10 mb-5 rounded-lg`}>
      {banner.content}
    </div>
  };

  const savedLabelPositionClass = savedLabelPosition === 'left' ? 'left-5' : 'right-5';
  return (
    <div className="relative w-full">
      <div
        className={`absolute ${savedLabelPositionClass} top-5 z-10 mb-5 rounded-lg bg-accent px-2 py-1 text-sm text-muted-foreground`}>
        <Button type={'button'} onClick={onClickSave} variant="outline" size="sm">
          {saveStatus}
        </Button>
      </div>
      {bannerDiv()}
      <EditorRoot>
        <EditorContent
          initialContent={initialContent}
          extensions={extensions}
          className="relative min-h-[500px] w-full border-green-950 bg-background sm:rounded-lg sm:border shadow-xl"
          editorProps={{
            handleDOMEvents: {
              keydown: (_view, event) => handleCommandNavigation(event),
            },
            handlePaste: (view, event) =>
              handleImagePaste(view, event, uploadFn),
            handleDrop: (view, event, _slice, moved) =>
              handleImageDrop(view, event, moved, uploadFn),
            attributes: {
              class: `prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full`,
            },
          }}
          onUpdate={({editor}) => {
            if(setHtmlContent) {
              setHtmlContent(convertNovelToHtml(editor.getJSON()));
            }
            if(setJsonContent) {
              setJsonContent(editor.getJSON());
            }
            setInternalJsonContent(editor.getJSON());
            setSaveStatus("未保存");
          }}
          slotAfter={<ImageResizer/>}
        >
          <EditorCommand
            className="z-50 h-auto max-h-[330px] overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
            <EditorCommandEmpty className="px-2 text-muted-foreground">
              結果がありません
            </EditorCommandEmpty>
            <EditorCommandList>
              {suggestionItems.map((item) => (
                <EditorCommandItem
                  value={item.title}
                  onCommand={(val) => handleCommand(item, val)}
                  className={`flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent `}
                  key={item.title}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </EditorCommandItem>
              ))}
            </EditorCommandList>
          </EditorCommand>

          <GenerativeMenuSwitch open={openAI} onOpenChange={setOpenAI}>
            <Separator orientation="vertical"/>
            <NodeSelector open={openNode} onOpenChange={setOpenNode}/>
            <Separator orientation="vertical"/>

            <LinkSelector open={openLink} onOpenChange={setOpenLink}/>
            <Separator orientation="vertical"/>
            <TextButtons/>
            <Separator orientation="vertical"/>
            <ColorSelector open={openColor} onOpenChange={setOpenColor}/>
          </GenerativeMenuSwitch>
        </EditorContent>
      </EditorRoot>
    </div>
  );
};

export default Editor;