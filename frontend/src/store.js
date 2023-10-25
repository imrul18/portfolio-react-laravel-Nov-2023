import { configureStore } from '@reduxjs/toolkit';
import data from './userDataSlice';

export default configureStore({
  reducer: { data },
});
