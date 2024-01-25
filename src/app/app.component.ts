import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
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
        Validators.minLength(4),
        Validators.minLength(4)
      ]
      )
  })

  ngOnInit() {

  }

  submit() {
    console.log(this.form)
    console.log(this.form.value)
  }

  protected readonly toolbar = toolbar;
}

