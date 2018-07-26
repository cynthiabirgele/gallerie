import { combineReducers } from "redux"

import RoomReducer from "./reducer-rooms"
import ActiveRoomReducer from "./reducer-active-room"

const allReducers = combineReducers({
	rooms: RoomReducer,
	activeRoom: ActiveRoomReducer,
})

export default allReducers
