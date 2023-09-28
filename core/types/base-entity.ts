/*
 * File: base-entity.ts
 * File Created: 2023-09-21 08:27:40
 * Author: Val Liu <valuis0429@gmail.com>
 *
 * -----
 * Last Modified: 2023-09-21 04:22:42
 * Modified By: Val Liu
 * -----
 */

/// Base Type
export interface IEntityPrimaryKey {
    id: string;
}

export interface IEntityDateInfo {
    createdAt: Date;
    updatedAt: Date;
}

export type IBaseEntity = IEntityPrimaryKey & IEntityDateInfo;

/// Conversion Type
export type BeEntity<T> = IEntityPrimaryKey & T & IEntityDateInfo;

export type CreateDto<T> = T;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ReadDto<T> = IEntityPrimaryKey;
export type UpdateDto<T> = IEntityPrimaryKey & Partial<T>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type DeleteDto<T> = IEntityPrimaryKey;
