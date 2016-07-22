import { combineReducers } from 'redux';
import LoginPageReducer from '../Components/LoginPage/LoginPageReducer';
import SignupPageReducer from '../Components/SignupPage/SignupPageReducer';
import LinkPageReducer from '../Components/LinkPage/LinkPageReducer';

class ReducerService {

    static bundleReducers() {
        return combineReducers({
            LoginPageReducer,
            SignupPageReducer,
            LinkPageReducer
        })
    }
}

export default ReducerService;