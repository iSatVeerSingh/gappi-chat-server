import { Controller, Get, Post } from '@nestjs/common';
import { Routes } from 'src/utils/constants';

@Controller(Routes.AUTH)
export class AuthController {
  // Create a new user account
  @Post('signup')
  signup() {
    return 'This is signup ';
  }

  // Login an existing user
  @Post('login')
  login() {
    return 'This is login user'
  }

  //Get status of user
  @Get('status')
  status(){
    return 'This is status'
  }

  // Logout already logged in user
  @Post('logout')
  logout(){
    return 'This is logout'
  }
}
