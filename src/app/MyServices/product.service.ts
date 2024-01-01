import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 

  }

  getAllProducts(){
    return this.http.get<any>('getAllProducts')
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  getProductByCategory(category: any){
    return this.http.get("getProductByCategory/"+ category);
  }

  addProduct(prod: any) {
    return this.http.post('/registerProduct/', prod);
  }

  updateProduct(prod: any): any {
    return this.http.put('/updateProduct', prod);
  }

  deleteProduct(prodId: any): any {
    return this.http.delete('/deleteProduct/' + prodId)
  }

}
