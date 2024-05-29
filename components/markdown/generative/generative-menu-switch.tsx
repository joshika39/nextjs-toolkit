import {EditorBubble, EditorInstance, useEditor} from "novel";
import React, { Fragment, useEffect, type ReactNode } from "react";
import { AISelector } from "./ai-selector";
import { removeAIHighlight } from "novel/extensions";

interface GenerativeMenuSwitchProps {
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const GenerativeMenuSwitch = ({
                                children,
                                open,
                                onOpenChange,
                              }: GenerativeMenuSwitchProps) => {
  const { editor } = useEditor();

  const handleRemoveAIHighlight = (editor: EditorInstance | null | undefined) => {
    if (!editor) {
      return;
    }
    removeAIHighlight(editor);
  }

  useEffect(() => {
    if (!open) {
      handleRemoveAIHighlight(editor);
    }
  }, [editor, open]);
  return (
    <EditorBubble
      tippyOptions={{
        placement: open ? "bottom-start" : "top",
        onHidden: () => {
          onOpenChange(false);
          editor?.chain().unsetHighlight().run();
        },
      }}
      className="flex w-fit max-w-[90vw] overflow-hidden rounded-md border border-muted bg-background shadow-xl"
    >
      {open && <AISelector open={open} onOpenChange={onOpenChange} />}
      {!open && (
        <Fragment>
         { /*  <Button
            className="gap-1 rounded-none text-purple-500"
            variant="ghost"
            onClick={() => onOpenChange(true)}
            size="sm"
          >
            <Magic className="h-5 w-5" />
            Ask AI
          </Button> */ }
          {children}
        </Fragment>
      )}
    </EditorBubble>
  );
};

export default GenerativeMenuSwitch;