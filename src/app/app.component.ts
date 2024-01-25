import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges{
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

  ngOnChanges(changes: SimpleChanges) {
  }

  submit() {
    console.log(this.form.get('password'));
  }

  protected readonly toolbar = toolbar;
}

