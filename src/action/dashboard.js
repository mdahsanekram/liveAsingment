import { GET_HOBBIES,GET_RATING_E,GET_RATING_V,GET_SUBJECT, UPDATE_DATA } from "./type";
import axios from 'axios'

export const getHobbies = () => async (dispatch) => {
	try {
		const res = await axios.get(`https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetHobbiesResponse.json`);
		const { result } = res.data;

		if (result) {
		await dispatch({
				type: GET_HOBBIES,
				payload: result[0]?.hobbies || []
			});
			return result[0]?.hobbies;
		} else {
			return null;
		}
	} catch (err) {
		console.error(err);
	}
}

export const getSubject = () => async (dispatch) => {
	try {
		const res = await axios.get(`https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json`);
		const { result } = res.data;
		if (result) {
		await dispatch({
				type: GET_SUBJECT,
				payload: result[0]?.subjects || []
			});
			return result[0]?.subjects;
		} else {
			return null;
		}
	} catch (err) {
		console.error(err);
	}
}


export const getErate = () => async (dispatch) => {
	try {
		const res = await axios.get(`https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/RatingsEthicalCodeResponse.json`);
		const { result } = res.data;
		if (result) {
		await dispatch({
				type: GET_RATING_E,
				payload: result || []
			});
			return result;
		} else {
			return null;
		}
	} catch (err) {
		console.error(err);
	}
}


export const getVrate = () => async (dispatch) => {
	try {
		const res = await axios.get(`https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/RatingsVirtuallyMetResponse.json`);
		const { result } = res.data;
		if (result) {
		await dispatch({
				type: GET_RATING_V,
				payload: result || []
			});
			return result;
		} else {
			return null;
		}
	} catch (err) {
		console.error(err);
	}
}

export const editData = (data) => async (dispatch) => {
	try {
		if(data){
		await dispatch({
				type: UPDATE_DATA,
				payload: data || {}
			});
			return data;
		} else {
			return null;
		}
	} catch (err) {
		console.error(err);
	}
}