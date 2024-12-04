import { combineReducers } from 'redux';
import userReducer from './slices/userSlice';
import bookReducer from './slices/bookSlice';

const rootReducer = combineReducers({
  user: userReducer,
  book: bookReducer,
});

export default rootReducer;
