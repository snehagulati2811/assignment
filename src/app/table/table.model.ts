export interface TableHeader {
  name: string;
  isShown: boolean;
  isScreenReaderOnly: boolean;
  headerWidthCss: string;
  // position: number;
  type: "image" | "text" | "input";
}
