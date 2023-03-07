import { DCR, INC, LOADING, RESET } from "../Constants/ActionType";

const initialVal = {
    count : 0,
    isLoading : true
};

const IncDcr = (state = initialVal, action) => {

    switch (action.type) {
        case INC:
            return {
                ...state,
                count : state.count + 1,
                isLoading : false
            }
            break;
        case DCR:
            return {
                ...state,
                count : state.count - 1,
                isLoading : false
            }
            break;
        case LOADING : 
        console.log("lodding called");
            return{
                ...state,
                isLoading : true
            }
        case RESET:
            return {
                ...state,
                count : state.count,
                isLoading : false
            }
            break;
        default:
            return {
                ...state,
                count : state.count,
                isLoading : false
            }
    }
}

export default IncDcr;