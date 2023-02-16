import { DCR, INC } from "../Constants/ActionType";

const initialVal = 0;

const IncDcr = (state = initialVal , action) => {

    switch(action.type){
        case INC:
            return state + 1;
            break;
        case DCR:
            return state - 1;
            break;
        default :
            return state;
    }
}

export default IncDcr;