import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLoacationComponent } from "../housing-loacation/housing-loacation.component";
import type { HousingLocation } from "../housing-location";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLoacationComponent],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {}
