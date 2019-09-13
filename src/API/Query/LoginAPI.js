import * as endPoints from '../endpoints';
import {fetchApi} from '../index';

export const getBaseLogin = (payload,params) => fetchApi(endPoints.login.get(params),payload,'get');
export const postLogin = (payload,params) => fetchApi(endPoints.login.post(params),payload,'post');