import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TableComponent } from "./table.component";
import { DownloadComponent } from "../download/download.component";
import { By } from "@angular/platform-browser";

describe("TableComponent", () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent, DownloadComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.tableDataArray = [
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
    component.tableHeader = [
      {
        name: "inputBox",
        isShown: true,
        isScreenReaderOnly: true,
        headerWidthCss: "custom-table-width-5",
        type: "input"
      }
    ];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set selectedNumber to zero on ngoninit", () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.checkAllSelected()).toBe(0);
  });

  it("should handle checkbox click and update selected number to 2", () => {
    const btn = fixture.debugElement.query(By.css("#all-Selected"));
    btn.triggerEventHandler("change", { target: { checked: true } });
    fixture.detectChanges();
    expect(component.checkAllSelected()).toBe(2);
  });

  it("should handle checkbox click and update selected number to 1", () => {
    const btn = fixture.debugElement.query(By.css("#selectDevice1"));
    btn.triggerEventHandler("change", { target: { checked: true } });
    fixture.detectChanges();
    expect(component.checkAllSelected()).toBe(1);
  });
});
