import {FormState} from "./types.ts";

export const DefaultFormState: FormState = {
  error: undefined,
  success: false,
  message: undefined,
  timestamp: new Date().toLocaleTimeString(),
}

export const defaultEditorContent = {
  type: "doc",
  content: []
};
