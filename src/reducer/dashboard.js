import {GET_HOBBIES,GET_RATING_E,GET_RATING_V,GET_SUBJECT,UPDATE_DATA} from '../action/type'
const initialState={
    hobbies:[],
    subject:[],
    ethiticalCodeRate:[],
    virtuallyMetRate:[],
    data:{
        aboutme:"Ahsan",
        bgroup:"B+",
        resume:"Na"
    }

}
function dashboard(state=initialState, action) {
    const {type, payload}=action
    switch (type) {
        case GET_HOBBIES:
          return state={
            ...state,
            hobbies:payload
          }
          case GET_SUBJECT:
          return state={
            ...state,
            subject:payload
          }
          case GET_RATING_E:
          return state={
            ...state,
            ethiticalCodeRate:payload
          }
          case GET_RATING_V:
          return state={
            ...state,
            virtuallyMetRate:payload
          }
          case UPDATE_DATA:
            return state={
                ...state,
            data:payload
            }
        default:
          return state
      }
    
  }

  export default dashboard;