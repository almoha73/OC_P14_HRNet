

export const employeeReducer = (state, action) => {
	switch (action.type) {
		case "SEARCH_SORT":
			return { ...state, searchSort: action.payload 
			};
		case "TOGGLE_SORT":

			return { ...state, toggleSort: action.payload };

		default:
			return state;
	}
};
