import { INC ,DCR ,RESET } from "../Constants/ActionType"
export const increment = (data) => {
    return{
        type : INC,
        payload : data
    }
}

export const decrement = (data) => {
    return{
        type : DCR,
        payload : data
    }
}

export const reset = (data) => {
    return{
        type : RESET,
        payload : data
    }
}