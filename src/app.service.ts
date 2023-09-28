/*
 * File: app.service.ts
 * File Created: 2023-09-20 08:27:25
 * Author: Val Liu <valuis0429@gmail.com>
 *
 * -----
 * Last Modified: 2023-09-21 01:15:54
 * Modified By: Val Liu
 * -----
 */
1;
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getHello(): string {
        return "Hello World!";
    }
}
