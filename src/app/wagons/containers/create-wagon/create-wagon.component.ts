import { Component, OnInit } from '@angular/core';
import { WagonService } from '@shared/services/wagon.service';
import { Router } from '@angular/router';
import { WagonModel } from '@shared/models/wagon.model';

@Component({
  selector: 'app-create-wagon',
  templateUrl: './create-wagon.component.html',
  styleUrls: ['./create-wagon.component.scss'],
})
export class CreateWagonComponent {
  constructor(private router: Router, private wagonsService: WagonService) {}

  async createNewWagon(event: WagonModel) {
    console.log(event);

    await this.wagonsService.addWagon(event.toJSON());
    this.goBack();
  }

  goBack() {
    this.router.navigate(['wagons']);
  }
}
