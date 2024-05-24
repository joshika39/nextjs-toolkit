export type FormState = {
  error: string | undefined;
  success: boolean;
  message: string | undefined;
  timestamp: string;
}

export type Language = {
  isDefault: boolean;
  code: string;
  name: string;
  isReviewed: boolean;
  isNotStarted: boolean;
  isCompleted: boolean;
  isInReview: boolean;
  isEnabled: boolean;
  canBeDocsLanguage: boolean;
}
