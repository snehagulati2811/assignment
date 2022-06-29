import {
  TestBed,
  async,
  ComponentFixture,
  fakeAsync,
  tick
} from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { TableComponent } from "./table/table.component";
import { DownloadComponent } from "./download/download.component";
import { HttpClientModule } from "@angular/common/http";
import { AppService } from "./app.service";
import { of } from "rxjs";
import { DeviceDataId } from "./device-data.model";
import { TableHeader } from "./table/table.model";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let appService: AppService;
  const deviceIdData: DeviceDataId[] = [
    {
      inputBox: "checked",
      name: "smss.exe",
      device: "Stark",
      path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
      imageInd: "active status",
      status: "scheduled",
      id: 1,
      selected: false
    },

    {
      inputBox: "checked",
      name: "smss.exe",
      device: "Stark",
      path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
      imageInd: "active status",
      status: "scheduled",
      id: 1,
      selected: false
    }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, TableComponent, DownloadComponent],
      imports: [HttpClientModule],
      providers: [AppService]
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    appService = TestBed.get(AppService);
  });

  it("should create the app", () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("should set table body data", fakeAsync(() => {
    spyOn(appService, "getData").and.returnValue(of(deviceIdData));
    component.getDevicedata();
    tick();
    fixture.detectChanges();
    expect(component.deviceDataId).toEqual(deviceIdData);
  }));

  it("should set header ", fakeAsync(() => {
    const mockHeader: TableHeader = {
      name: "inputBox",
      isShown: true,
      isScreenReaderOnly: true,
      headerWidthCss: "custom-table-width-5",
      type: "input"
    };
    spyOn(appService, "getData").and.returnValue(of(deviceIdData));
    component.getDevicedata();
    tick();
    fixture.detectChanges();
    expect(component.tableHeader[0]).toEqual(mockHeader);
  }));
});
