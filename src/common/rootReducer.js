import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import history from './history';
import common from '../features/common/redux/commonSlice';
import award from '../features/home/redux/awardSlice';

const reducerMap = {
  router: connectRouter(history),
  common,
  award,
};

export default combineReducers(reducerMap);
