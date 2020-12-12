export type Line = {
  message: string;
  timestamp: string;
};

export interface State {
  lines: Line[];
  error?: string;
  loading: boolean;
}
