import { DCR, INC , RESET } from "../Constants/ActionType";

const initialVal = 0;

const IncDcr = (state = initialVal , action) => {

    switch(action.type){
        case INC:
            return state + 1;
            break;
        case DCR:
            if(state > 0){
                return state - 1;
            }
            break;
        case RESET :
            return state = initialVal;
            break;
        default :
            return state;
    }
}

export default IncDcr;