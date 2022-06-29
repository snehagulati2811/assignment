import { Component, OnInit } from "@angular/core";
import { DeviceData, DeviceDataId } from "./device-data.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { TableHeader } from "./table/table.model";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  heading: string[] = [];
  selectedNumber: number;
  deviceDataId: DeviceDataId[] = [];
  tableHeader: TableHeader[] = [];

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.getDevicedata();
  }

  getDevicedata(): void {
    this.appService.getData().subscribe((data: DeviceDataId[]) => {
      this.deviceDataId = data;
      const tempHeaderNames = this.deviceDataId[0];
      let newSet: TableHeader;
      for (const tempHeaderKey in tempHeaderNames) {
        let isShown: boolean = true;
        let type: "image" | "text" | "input" = "text";
        let isScreenReaderOnly: boolean = false;
        let headerWidthCss: string = "custom-table-width-15";
        switch (tempHeaderKey) {
          case "inputBox": {
            headerWidthCss = "custom-table-width-5";
            type = "input";
            isScreenReaderOnly = true;
            break;
          }
          case "path": {
            headerWidthCss = "custom-table-width-53";
            break;
          }
          case "status": {
            headerWidthCss = "custom-table-width-12";
            break;
          }
          case "id":
          case "selected": {
            isShown = false;
            break;
          }
          case "imageInd": {
            headerWidthCss = "custom-table-width-2";
            isScreenReaderOnly = true;
            type = "image";
            isShown = true;
            break;
          }
          default:
        }
        newSet = {
          name: tempHeaderKey,
          isShown: isShown,
          isScreenReaderOnly: isScreenReaderOnly,
          headerWidthCss: headerWidthCss,
          type: type
        };
        this.tableHeader.push(newSet);
      }
      // this.tableHeader = tempHeader.sort((a, b) => a.position - b.position);
    });
  }

  handleDownload(): void {
    let alertedText: string = "";
    this.deviceDataId.forEach(data => {
      if (data.selected && data.status === "available") {
        alertedText =
          alertedText +
          "path : " +
          data.path +
          "   " +
          "device : " +
          data.device +
          "\n\n";
      }
    });
    if (alertedText.length) {
      alert(alertedText);
    }
  }
}
