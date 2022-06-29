import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DeviceData, DeviceDataId } from "./device-data.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get("assets/device-data.json").pipe(
      map((data1: DeviceData[]) => {
        return data1.map((element, index) => {
          let newObj: DeviceDataId = {
            inputBox: "checked",
            name: element.name,
            path: element.path,
            device: element.device,
            imageInd: "active status ",
            status: element.status,
            id: index,
            selected: false
          };
          return newObj;
        });
      })
    );
  }
}
