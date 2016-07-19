import { combineReducers } from 'redux';
import LinkPageReducer from '../Components/LinkPage/LinkPageReducer';

class ReducerService {

    static budleReducers() {
        return combineReducers({
            LinkPageReducer
        })
    }
}

export default ReducerService;