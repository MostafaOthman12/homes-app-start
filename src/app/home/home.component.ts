import { Component, inject, OnInit } from "@angular/core";
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
export class HomeComponent implements OnInit {
  housingLocations: HousingLocation[] | undefined = [];
  housingLocationService = inject(HousingService);

  ngOnInit() {
    this.housingLocationService.getAllHousing().subscribe({
      next: (locations) => {
        this.housingLocations = locations;
      },
      error: (error) => {
        console.error("Error fetching housing locations:", error);
      },
    });
  }
}
