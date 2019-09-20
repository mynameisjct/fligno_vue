import * as endPoints from '../endpoints';
import {fetchApi} from '../index';

export const doResetPassword = (payload,params) => fetchApi(endPoints.email.resetpassword(payload),payload,'post');