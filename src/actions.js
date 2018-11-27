export const TOGGLE_EMAIL_STAR = "TOGGLE_EMAIL_STAR";
export const TOGGLE_EMAIL_CHECK = "TOGGLE_EMAIL_CHECK";
export const SET_SELECTED_FOLDER = "SET_SELECTED_FOLDER";

export const toggleEmailStar = (id) => {
    return {
        type: TOGGLE_EMAIL_STAR,
        id
    }
}

export const toggleEmailCheck = (id) => {
    return {
        type: TOGGLE_EMAIL_CHECK,
        id
    }
}

export const setSelectedFolder = (id) => {
    return {
        type: SET_SELECTED_FOLDER,
        id
    }
}