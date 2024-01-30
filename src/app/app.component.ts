import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { FormControl, FormGroup, Validators } from "@angular/forms";

interface CityMap {
  [key: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  form: FormGroup = new FormGroup({
    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.email,
      ]),
    password: new FormControl(
      null,
      [
        Validators.required,
        Validators.minLength(4),
      ]),
    address: new FormGroup({
      country: new FormControl('ua'),
      city: new FormControl('', Validators.required)
    })
  })

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
  }

  submit() {
    console.log(this.form.value);
  }

  protected readonly toolbar = toolbar;

  cityMap: CityMap = {
    ru: 'Москва',
    ua: 'Киев',
    by: 'Минск',
  }

  setCapital() {
    const country = this.form.get('address')?.get('country')?.value

    this.form.patchValue({
      address: {city: this.cityMap[country]}
    })
  }
}

