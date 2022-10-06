import {configureStore} from '@reduxjs/toolkit';
import { RstateApi } from '../services/RstateApi';
// import { cryptoNewsApi } from '../services/cryptoNewsApi';
export default configureStore({
    reducer:{
        [RstateApi.reducerPath]:RstateApi.reducer,
    },

});