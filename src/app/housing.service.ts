import { Injectable } from "@angular/core";
import { HousingLocation } from "./housing-location";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  protected housingLocactions: HousingLocation[] = [];

  getAllHousing(): HousingLocation[] {
    return this.housingLocactions;
  }

  getHousingById(id: number): HousingLocation | undefined {
    return this.housingLocactions.find((x) => x.id === id);
  }
  applyToHoussing(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
