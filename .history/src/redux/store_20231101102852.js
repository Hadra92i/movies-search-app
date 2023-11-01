import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Import your reducers here
import authReducer from './reducers/authReducer';
import cartReducer from './reducers/cartReducer';

// Combine your reducers into a single reducer
const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    form: formReducer
});

// Create the store with the rootReducer
const store = createStore(rootReducer);

export default store;
