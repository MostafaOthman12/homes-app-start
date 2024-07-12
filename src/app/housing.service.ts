import { inject, Injectable } from "@angular/core";
import { HousingLocation } from "./housing-location";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  httpClient = inject(HttpClient);
  private housingLocations: HousingLocation[] = [];

  getAllHousing(): Observable<HousingLocation[]> {
    return this.httpClient.get<HousingLocation[]>(
      "http://localhost:3000/locations"
    );
  }

  getHousingById(id: number): Observable<HousingLocation> | undefined {
    return this.httpClient.get<HousingLocation>(
      `http://localhost:3000/locations/${id}`
    );
  }

  applyToHousing(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
