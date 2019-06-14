import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { UserService } from '../services';
import { CreateUserDTO } from '../dto/create-user.dto';

@Controller()
export class UserController {
    constructor(private userService: UserService) { }
    @Post('/users/user')
    async addUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
        const newUser = await this.userService.addUser(createUserDTO);
        return res.status(HttpStatus.OK).json({
            message: "user has been submitted successfully!",
            user: newUser
        })
    }
}