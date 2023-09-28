/*
 * File: user.controller.ts
 * File Created: 2023-09-21 09:31:58
 * Author: Val Liu (valuis0429@gmail.com)
 *
 * -----
 * Last Modified: 2023-09-23 11:50:00
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
import { TypedBody, TypedQuery, TypedRoute } from "@nestia/core";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @TypedRoute.Post()
    create(@TypedBody() createUserDto: ICreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @TypedRoute.Get()
    read(@TypedQuery() readUserDto: IReadUserDto) {
        return this.userService.read(readUserDto);
    }

    @TypedRoute.Patch()
    update(@TypedBody() updateUserDto: IUpdateUserDto) {
        return this.userService.update(updateUserDto);
    }

    @TypedRoute.Delete()
    delete(@TypedQuery() deleteUserDto: IDeleteUserDto) {
        return this.userService.delete(deleteUserDto);
    }
}
