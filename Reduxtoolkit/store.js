import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './Reducer/counter';
import schoolReducer from './Reducer/school';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    school: schoolReducer,
  },
});
