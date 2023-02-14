import { INC ,DCR } from "../Constants/ActionType"
export const increment = () => {
    return{
        type : INC,
    }
}

export const decrement = () => {
    return{
        type : DCR,
    }
}