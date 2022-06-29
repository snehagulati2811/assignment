export interface DeviceData {
  name: string;
  device: string;
  path: string;
  status: string;
}

export interface DeviceDataId extends DeviceData {
  id: number;
  inputBox: "checked" | "textbox" | "radio";
  imageInd: string;
  selected: boolean;
}
