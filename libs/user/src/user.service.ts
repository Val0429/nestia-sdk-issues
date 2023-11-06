/*
 * File: user.service.ts
 * File Created: 2023-09-21 08:13:06
 * Author: Val Liu (valuis0429@gmail.com)
 *
 * -----
 * Last Modified: 2023-11-06 02:23:11
 * Modified By: Val Liu
 * -----
 */

import { Injectable, Optional } from "@nestjs/common";
import {
    CreateDto,
    CreateOutput,
    DeleteDto,
    DeleteOutput,
    GeneralOutput,
    PrettifyCreateDto,
    PrettifyDeleteDto,
    PrettifyReadDto,
    PrettifyUpdateDto,
    ReadDto,
    ReadOutput,
    UpdateDto,
    UpdateOutput,
} from "core/types/base-entity";
import { Prisma } from "@prisma/client";

export type IUser = Output;

export type ICreateUserDto = CreateDto<Delegate>;
type IPrettifyCreateUserDto = PrettifyCreateDto<ICreateUserDto>;
export type ICreateUserOutput = CreateOutput<Delegate>;

export type IReadUserDto = ReadDto<Delegate>;
type IPrettifyReadUserDto = PrettifyReadDto<IReadUserDto>;
export type IReadUserOutput = ReadOutput<Delegate>;

export type IUpdateUserDto = UpdateDto<Delegate>;
type IPrettifyUpdateUserDto = PrettifyUpdateDto<IUpdateUserDto>;
export type IUpdateUserOutput = UpdateOutput<Delegate>;

export type IDeleteUserDto = DeleteDto<Delegate>;
type IPrettifyDeleteUserDto = PrettifyDeleteDto<IDeleteUserDto>;
export type IDeleteUserOutput = DeleteOutput<Delegate>;

/// private helper: Prisma payload definition
type Delegate = Prisma.UserDelegate;
type Output = GeneralOutput<Delegate>;

@Injectable()
export class UserService {
    // constructor(@Optional() private readonly prisma: PrismaService) {
    //     console.log("is it really here?", this.prisma);
    // }

    create(createUserDto: ICreateUserDto): ICreateUserOutput {
        return "create user!" as any;
    }

    read(readUserDto: IReadUserDto): IReadUserOutput {
        return "find users!" as any;
    }

    update(updateUserDto: IUpdateUserDto): IUpdateUserOutput {
        return "update user!" as any;
    }

    delete(deleteUserDto: IDeleteUserDto): IDeleteUserOutput {
        return "delete user!" as any;
    }
}
