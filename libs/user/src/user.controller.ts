/*
 * File: user.controller.ts
 * File Created: 2023-09-21 09:31:58
 * Author: Val Liu (valuis0429@gmail.com)
 *
 * -----
 * Last Modified: 2023-11-06 11:49:44
 * Modified By: Val Liu
 * -----
 */

import { Controller } from "@nestjs/common";
import {
    ICreateUserDto,
    IDeleteUserDto,
    IReadUserDto,
    IUpdateUserDto,
    UserService,
} from "./user.service";
import { TypedBody, TypedRoute } from "@nestia/core";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @TypedRoute.Post()
    create(@TypedBody() createUserDto: ICreateUserDto): string {
        return this.userService.create(createUserDto);
    }

    @TypedRoute.Patch()
    read(@TypedBody() readUserDto: IReadUserDto): string {
        return this.userService.read(readUserDto);
    }

    @TypedRoute.Put()
    update(@TypedBody() updateUserDto: IUpdateUserDto): string {
        return this.userService.update(updateUserDto);
    }

    @TypedRoute.Delete()
    delete(@TypedBody() deleteUserDto: IDeleteUserDto): string {
        return this.userService.delete(deleteUserDto);
    }
}
