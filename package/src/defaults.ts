import {FormState} from "./types";

export const defaultFormState: FormState = {
  error: undefined,
  success: false,
  message: undefined,
  timestamp: new Date().toLocaleTimeString(),
}

export const defaultEditorContent = {
  type: "doc",
  content: []
};
