export default function(state = null, action) {
	switch (action.type) {
		case "ADD_OVERLAY":
			return action.payload
			break
		case "CLOSE_OVERLAY":
			return null
			break
	}
	return state
}
