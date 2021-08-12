export type AppStateType = {
  loading?: boolean;
  error?: string;
  isLoadMore?: boolean;
  current_screen?: string;
  progress_indicator?: boolean;
  infoMessage: {
    isVisible?: boolean;
    title?: string;
    message?: string;
  };
  modal_topup_visible: boolean;
  modal_note_visible: boolean;
  modal_rate_visible: boolean;
};

