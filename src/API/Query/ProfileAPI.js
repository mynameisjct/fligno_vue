import * as endPoints from '../endpoints';
import {fetchApi} from '../index';

export const getProfileData = (payload,params) => fetchApi(endPoints.profiles.all(params),payload,'get')
export const deleteProfile = (payload,params) => fetchApi(endPoints.profiles.delete(params),payload,'post')
export const getProfileOnEmail = (payload,params) => fetchApi(endPoints.profiles.byEmail(payload),payload,'get')
export const updateProfile = (payload,params) => fetchApi(endPoints.profiles.update(payload),payload,'post')
export const saveProfile = (payload,params) => fetchApi(endPoints.profiles.save(payload),payload,'post')