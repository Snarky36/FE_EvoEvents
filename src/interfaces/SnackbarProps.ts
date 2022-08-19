export interface SnackbarProps {
  open: boolean,
  autoHideDuration: number | null,
  onClose: (event, reason) => void,
  alertOnClose: (value) => void,
  message: string
} 