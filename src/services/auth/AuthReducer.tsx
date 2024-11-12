export const FAKE_USER = {
    name: "admin",
    email: "admin@mail.com",
    password: "pass",
};

export const initialState = {
    isAuthenticated: false,
    user: null,
    error:null
}

export const actionTypes = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    INCORRECT_CREDS: "INCORRECT_CREDS",
}

export default function reducer(state, action) {
    const { type, payload } = action
    switch (type) {
        case actionTypes.LOGIN:
            return { ...state, isAuthenticated: true, user: payload, error: null }
        case actionTypes.LOGOUT:
            return { ...state, ...initialState }
        case actionTypes.INCORRECT_CREDS:
            return {...state, error: "Please enter valid credentials"}
        default:
            return state;
    }
}