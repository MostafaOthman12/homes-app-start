import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLoacationComponent } from "../housing-loacation/housing-loacation.component";
import type { HousingLocation } from "../housing-location";
import { HousingService } from "../housing.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLoacationComponent],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingLocactions: HousingLocation[] = [];
  housingLocationService = inject(HousingService);
  ngOnInit() {
    this.housingLocactions = this.housingLocationService.getAllHousing();
  }
}
