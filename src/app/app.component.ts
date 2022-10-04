import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm !: FormGroup;
  title = 'AngularFormulario';
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid)
      return;
      
    alert('Success');
  }
}
