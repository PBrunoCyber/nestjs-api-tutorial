import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @Post('signin')
    signup(){
        return this.authService.signin();
    }
    @Post('signup')
    signin(){
        return this.authService.signup();
    }
}