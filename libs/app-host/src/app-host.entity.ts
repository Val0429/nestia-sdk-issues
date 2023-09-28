/*
 * File: app-host.entity.ts
 * File Created: 2023-09-22 10:16:36
 * Author: Val Liu <valuis0429@gmail.com>
 *
 * -----
 * Last Modified: 2023-09-22 10:40:45
 * Modified By: Val Liu
 * -----
 */

import { INestApplication, Injectable } from "@nestjs/common";

@Injectable()
export class AppHost {
    private _app: INestApplication;

    set(app: INestApplication) {
        this._app = app;
    }
    get app(): INestApplication {
        return this._app;
    }
}
