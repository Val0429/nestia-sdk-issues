/*
 * File: user.entity.ts
 * File Created: 2023-09-21 08:16:46
 * Author: Val Liu (valuis0429@gmail.com)
 *
 * -----
 * Last Modified: 2023-09-26 10:04:04
 * Modified By: Val Liu
 * -----
 */

//import { tags } from "typia";

export interface IUser {
    name: string;
    //email: string & tags.Format<"email">;
    password: string;
}
