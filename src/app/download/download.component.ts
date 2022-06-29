import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-download",
  templateUrl: "./download.component.html",
  styleUrls: ["./download.component.css"]
})
export class DownloadComponent implements OnInit {
  @Input() downloadText: string = "Download Selected";
  @Output() emitDownloadClick = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}
}
