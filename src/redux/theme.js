import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
    theme: JSON.parse(window?.localStorage.getItem("theme")) ?? "light",
};

const ThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme (state, action) {
            state.theme = action.payload;
            localStorage.setItem("theme", JSON.stringify(action.payload));
        },
    },
});

export default ThemeSlice.reducer;

export function setTheme(value) {
 return (dispatch) => {
    dispatch(themeSlice.actions.setTheme(value));
 };
}