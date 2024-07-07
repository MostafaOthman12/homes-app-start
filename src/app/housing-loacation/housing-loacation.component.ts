import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocation } from "../housing-location";

@Component({
  selector: "app-housing-loacation",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./housing-loacation.component.html",
  styleUrls: ["./housing-loacation.component.css"],
})
export class HousingLoacationComponent {
  @Input({ required: true }) housingLoaction!: HousingLocation;
}
