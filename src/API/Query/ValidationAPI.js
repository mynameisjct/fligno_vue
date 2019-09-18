import * as endPoints from '../endpoints';
import {fetchApi} from '../index';

export const validateEmail = (payload,params) => fetchApi(endPoints.validation.email(params),payload,'post')