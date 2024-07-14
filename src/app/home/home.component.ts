import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLoacationComponent } from "../housing-loacation/housing-loacation.component";
import type { HousingLocation } from "../housing-location";
import { HousingService } from "../housing.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLoacationComponent],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  housingLocations: HousingLocation[] = [];
  housingLocationService = inject(HousingService);
  filteredList: HousingLocation[] = [];

  onSearch(filter: string) {
    if (!filter) this.filteredList = this.housingLocations;
    else {
      this.filteredList = this.housingLocations.filter(
        (location) => location?.city.toLowerCase() === filter.toLowerCase()
      );
    }
  }

  ngOnInit() {
    this.housingLocationService.getAllHousing().subscribe({
      next: (locations) => {
        this.housingLocations = locations;
        this.filteredList = locations;
      },
      error: (error) => {
        console.error("Error fetching housing locations:", error);
      },
    });
  }
}
