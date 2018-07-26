export const addOverlay = room => {
	return {
		type: "ADD_OVERLAY",
		payload: room,
	}
}

export const closeOverlay = room => {
	return {
		type: "CLOSE_OVERLAY",
		payload: room,
	}
}
