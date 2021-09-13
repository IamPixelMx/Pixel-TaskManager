import React, { Reducer } from "react";
import { TasksTypes } from "./dataTypes";

export type StateTypes = {
    tasks: Array<TasksTypes>;
    loading: boolean;
    error: boolean;
    errorMsg: string;
};

export type TogglePayloadType = { id: number; completedAt: number | null };

export type ErrorPayloadType = { message?: string };

export type DispatchType = { type: string; payload?: Array<TasksTypes> | TogglePayloadType | ErrorPayloadType | any; };

export type StoreTypes = {
    state: StateTypes;
    dispatch: React.Dispatch<DispatchType>;
};
