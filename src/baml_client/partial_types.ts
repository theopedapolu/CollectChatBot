/*************************************************************************************************

Welcome to Baml! To use this generated code, please run one of the following:

$ npm install @boundaryml/baml
$ yarn add @boundaryml/baml
$ pnpm add @boundaryml/baml

*************************************************************************************************/

// This file was generated by BAML: do not edit it. Instead, edit the BAML
// files and re-generate this code.
//
/* eslint-disable */
// tslint:disable
// @ts-nocheck
// biome-ignore format: autogenerated code
import type { Image, Audio } from "@boundaryml/baml"
import type { Checked, Check } from "./types"
import type {  Action,  Message,  PaymentFrequency,  PaymentTerms,  Response,  ResponseType } from "./types"
import type * as types from "./types"

/******************************************************************************
*
*  These types are used for streaming, for when an instance of a type
*  is still being built up and any of its fields is not yet fully available.
*
******************************************************************************/

export interface StreamState<T> {
    value: T
    state: "Pending" | "Incomplete" | "Complete"
}

export namespace partial_types {
    
    export interface Action {
        function_name?: (string | null)
        parameters?: (partial_types.PaymentTerms | null)
    }
    
    export interface Message {
        role?: (string | null)
        content?: (string | null)
    }
    
    export interface PaymentTerms {
        debt_amount?: (number | null)
        frequency?: (PaymentFrequency | null)
        payment_term_length?: (number | null)
        payment_amount?: (number | null)
    }
    
    export interface Response {
        type?: (ResponseType | null)
        content?: ((partial_types.Action | null) | (string | null) | null)
    }
    
}