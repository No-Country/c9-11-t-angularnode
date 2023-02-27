export const appReducer = (state, action) => {

    switch (action.type) {
        case "SET_LOADING":
            return { ...state, isLoading: action.payload };

        case "HAS_CHANGES":
            return { ...state, hasChanges: action.payload };

        case "SET_CATEGORIES":
            return { ...state, categories: action.payload };
            
        default:
            return state;
    }

};