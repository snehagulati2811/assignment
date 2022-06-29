import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { DownloadComponent } from "./download/download.component";
import { TableComponent } from "./table/table.component";

@NgModule({
  declarations: [AppComponent, DownloadComponent, TableComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
