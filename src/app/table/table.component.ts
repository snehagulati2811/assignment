import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TableHeader } from "./table.model";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  @Input() tableDataArray: { [key: string]: string | boolean | number }[];
  @Input() tableCaption: string = "Table for device status";
  @Input() showCheckbox: boolean = true;
  @Input() tableHeader: TableHeader[];
  @Output() emitDownloadClick = new EventEmitter<null>();
  selectedNumber: number = 0;

  constructor() {}

  ngOnInit() {
    this.selectedNumber = this.checkAllSelected();
  }

  handleCheckboxClick(
    isChecked: boolean,
    index?: number,
    isAllSelected?: boolean
  ): void {
    if (isAllSelected) {
      this.selectedNumber = this.selectAll(isChecked);
    } else {
      this.tableDataArray[index].selected = isChecked;
      this.selectedNumber = this.checkAllSelected();
    }
  }

  selectAll(isChecked): number {
    this.tableDataArray.forEach(data => {
      data.selected = isChecked;
    });
    if (isChecked) {
      return this.tableDataArray.length;
    } else {
      return 0;
    }
  }

  checkAllSelected(): number {
    let count = 0;
    this.tableDataArray.forEach(data => {
      if (data.selected) {
        count++;
      }
    });
    return count;
  }
}
