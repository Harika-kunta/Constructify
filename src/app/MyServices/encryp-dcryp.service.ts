import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class EncrypDcrypService {

  private secretKey = 'pass!123$';

  constructor() { }

 
  encryptPassword(password: string): string {
    const hashedPassword = CryptoJS.SHA256(password).toString();
    return hashedPassword;
  }

}
