/*
 * File: app.controller.ts
 * File Created: 2023-09-20 08:27:25
 * Author: Val Liu <valuis0429@gmail.com>
 *
 * -----
 * Last Modified:
 * Modified By:
 * -----
 */

import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    // @Get()
    // getHello(): string {
    //     return this.appService.getHello();
    // }
}
