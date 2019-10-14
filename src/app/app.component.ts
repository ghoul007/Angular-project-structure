import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "./app.config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "structure";

  constructor(private http: HttpClient) {
    this.http
      .get(`${APP_CONFIG.apiBaseUrl}/users`)
      .subscribe(users => console.log(`users => ${users}`));
  }
}
