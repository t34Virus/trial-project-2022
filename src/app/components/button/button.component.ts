import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ApiResponse } from 'src/app/model/response.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  public response: number = 0;
  constructor(public apiService: ApiService) { }

  ngOnInit(): void {

  }
  getValue(): void {
    this.apiService.apiResponse().subscribe((response: ApiResponse) => {
      this.response = response.value;
    })
  }

}
