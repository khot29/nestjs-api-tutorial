import { Injectable } from "@nestjs/common/decorators";



@Injectable({

})

export class AuthService{
  test(){
    console.log("authservice injected Successfully");
  }
}