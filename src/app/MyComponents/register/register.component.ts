import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { EncrypDcrypService } from 'src/app/MyServices/encryp-dcryp.service';
import { UserService } from 'src/app/MyServices/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

function phoneNumberLengthValidator(control: FormControl) {
  const phoneNumber = control.value;
  const validLength = phoneNumber && phoneNumber.toString().length === 10;
  return validLength ? null : { invalidLength: true };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user : any;
  
  constructor(
    private router: Router, 
    private service: UserService, 
    private toast: HotToastService,
    private encrdcr: EncrypDcrypService
    ) { }

  ngOnInit() {  }

  userRegistration(regForm: any) {
    console.log(regForm);
   
    const encryptdPassword = this.encrdcr.encryptPassword(regForm.password);
    this.user = {
      // userId: regFrom.userId,
      userName: regForm.userName,
      address: regForm.address,
      contactNo: regForm.phnNumber,
      emailId: regForm.emailId,
      password: encryptdPassword
    };


    this.service.registerUser(this.user).subscribe((result: any) => {console.log(result)});

    // alert('User Registration Done Successfully...');
    this.toast.success('User Registration Done Successfully...');
    this.router.navigate(['Login']);
  }

}
