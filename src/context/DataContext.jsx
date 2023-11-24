import { createContext, useState, useReducer } from "react";
import { combinedReducer } from "../reducers/messageReducer";
import PropTypes from 'prop-types';


const initialState = {
    messages: [],
}



export const DataContext = createContext({
    state: initialState,
    dispatch: () => null,
    hints: [],
    setHints: () => {},
    courseId: null,
    setCourseId: () => {},
    user: null,
    setUser: () => {},
});


export const DataProvider = ({ children }) => {
    const [hints, setHints] = useState([])
    const [courseId, setCourseId] = useState(null)
    const [user, setUser] = useState(null)
    const [idCount, setIdCount] = useState(1)
    const [state, dispatch] = useReducer(combinedReducer, initialState);

    return (
        <DataContext.Provider value={{ state, dispatch, hints, setHints, courseId, setCourseId, user, setUser, idCount, setIdCount }}>
            {children}
        </DataContext.Provider>
    )
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};