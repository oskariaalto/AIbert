import { createContext, useState, useReducer } from "react";
import { combinedReducer } from "../reducers/messageReducer";
import PropTypes from 'prop-types';


const initialState = {
    messages: [],
    user: {
            "userId": 1,
            "username": "Testi",
            "name": "Testi Testinen",
            "email": "testi@gmail.fi",
            "password": "$2b$10$Z5/eCDIQvKOxGlD6NOi3se06Fs7DPlDl/9QflCuhWlnFHNrRKdsea",
            "createdAt": "2023-11-04T13:29:18.482Z",
            "userCourses": [
                {
                    "id": 6,
                    "userId": 1,
                    "courseId": 4,
                    "course": {
                        "id": 4,
                        "courseCode": "MS-C1342",
                        "name": "Linear Algebra",
                        "year": 2023,
                        "assistantId": "asst_XVd9473tDZddw519d11zza6a",
                        "assignments": [
                            {
                                id: 13,
                                courseId: 4,
                                description: '\\item Consider the vectors $\\vec{x} = [2,3,4]^T, \\vec{y} = [1,0,2]^T$ and $\\vec{z} = [0,1,0]^T$ in $\\mathbb R^3$. \\begin{enumerate} \\item Are the vectors $\\vec{x},\\vec{y}$ and $\\vec{z}$ linearly dependent? \\item Find a vector $\\vec{w} \\in \\mathbb{R}^3$ such that $\\vec{x},\\vec{y}$ and $\\vec{w}$ are linearly independent. \\item Find a vector $\\vec{v} \\in \\mathbb{R}^3$ such that $\\vec{x},\\vec{z}$ and $\\vec{v}$ are linearly independent. \\end{enumerate}',
                                name: 'Exercise 1.1'
                              },
                              {
                                id: 14,
                                courseId: 4,
                                description: '\\item Let $\\vec{x} = [1,2,3]^T$. Represent $\\vec{x}$ as a linear combination of the basis vectors \\begin{enumerate} \\item $\\vec{e}_1=[1,0,0]^T$, $\\vec{e}_2=[0,1,0]^T$ and $\\vec{e}_3=[0,0,1]^T$ (so-called \\emph{cartesian} basis vectors), \\item $\\vec{q}_1 = [1,1,0]^T$, $\\vec{q}_2 = [1,0,1]^T$ and $\\vec{q}_3= [1,1,1]^T$, \\item $\\vec{v}_1 = [-1,1,-1]^T$, $\\vec{v}_2 = [1,2,2]^T$ and $\\vec{v}_3 = [1,-2,1]^T$. \\end{enumerate}',
                                name: 'Exercise 1.2'
                              },
                              {
                                id: 15,
                                courseId: 4,
                                description: '\\item Let $$ A = \\begin{bmatrix} 1 & -1 & 0 \\\\ 1 & 0 & -1 \\\\ 0 & -2 & 2 \\end{bmatrix} \\qquad \\text{and} \\qquad \\vec{b} = \\begin{bmatrix} 1 \\\\ -3 \\\\ 8 \\end{bmatrix}. $$ Compute a basis for the nullspace $N(A)$ by hand and find all solutions to the equation \\begin{equation*} A \\vec{x} = \\vec{b}. \\end{equation*}',
                                name: 'Exercise 1.3'
                              },
                              {
                                id: 16,
                                courseId: 4,
                                description: '\\item Let $\\vec0 \\not= \\vec{b},\\vec{c} \\in \\mathbb{R}^n$ and define $A = \\vec{b} \\vec{c}^T \\in \\mathbb{R}^{n \\times n}$. Show that \\begin{enumerate} \\item $R(A) = {\\rm span}\\{ \\vec{b} \\}$, \\item $N(A) = \\big\\{ \\vec{x} \\in \\mathbb{R}^n \\; | \\; \\vec{c}^T \\vec{x} = 0 \\big\\}$. \\end{enumerate}',
                                name: 'Exercise 1.4'
                              }
                        ]
                    }
                }
            ]

    },
    course: {
        "id": 4,
        "courseCode": "MS-C1342",
        "name": "Linear Algebra",
        "year": 2023,
        "assistantId": "asst_XVd9473tDZddw519d11zza6a",
        "assignments": [
            {
                id: 13,
                courseId: 4,
                description: '\\item Consider the vectors $\\vec{x} = [2,3,4]^T, \\vec{y} = [1,0,2]^T$ and $\\vec{z} = [0,1,0]^T$ in $\\mathbb R^3$. \\begin{enumerate} \\item Are the vectors $\\vec{x},\\vec{y}$ and $\\vec{z}$ linearly dependent? \\item Find a vector $\\vec{w} \\in \\mathbb{R}^3$ such that $\\vec{x},\\vec{y}$ and $\\vec{w}$ are linearly independent. \\item Find a vector $\\vec{v} \\in \\mathbb{R}^3$ such that $\\vec{x},\\vec{z}$ and $\\vec{v}$ are linearly independent. \\end{enumerate}',
                name: 'Exercise 1.1'
              },
              {
                id: 14,
                courseId: 4,
                description: '\\item Let $\\vec{x} = [1,2,3]^T$. Represent $\\vec{x}$ as a linear combination of the basis vectors \\begin{enumerate} \\item $\\vec{e}_1=[1,0,0]^T$, $\\vec{e}_2=[0,1,0]^T$ and $\\vec{e}_3=[0,0,1]^T$ (so-called \\emph{cartesian} basis vectors), \\item $\\vec{q}_1 = [1,1,0]^T$, $\\vec{q}_2 = [1,0,1]^T$ and $\\vec{q}_3= [1,1,1]^T$, \\item $\\vec{v}_1 = [-1,1,-1]^T$, $\\vec{v}_2 = [1,2,2]^T$ and $\\vec{v}_3 = [1,-2,1]^T$. \\end{enumerate}',
                name: 'Exercise 1.2'
              },
              {
                id: 15,
                courseId: 4,
                description: '\\item Let $$ A = \\begin{bmatrix} 1 & -1 & 0 \\\\ 1 & 0 & -1 \\\\ 0 & -2 & 2 \\end{bmatrix} \\qquad \\text{and} \\qquad \\vec{b} = \\begin{bmatrix} 1 \\\\ -3 \\\\ 8 \\end{bmatrix}. $$ Compute a basis for the nullspace $N(A)$ by hand and find all solutions to the equation \\begin{equation*} A \\vec{x} = \\vec{b}. \\end{equation*}',
                name: 'Exercise 1.3'
              },
              {
                id: 16,
                courseId: 4,
                description: '\\item Let $\\vec0 \\not= \\vec{b},\\vec{c} \\in \\mathbb{R}^n$ and define $A = \\vec{b} \\vec{c}^T \\in \\mathbb{R}^{n \\times n}$. Show that \\begin{enumerate} \\item $R(A) = {\\rm span}\\{ \\vec{b} \\}$, \\item $N(A) = \\big\\{ \\vec{x} \\in \\mathbb{R}^n \\; | \\; \\vec{c}^T \\vec{x} = 0 \\big\\}$. \\end{enumerate}',
                name: 'Exercise 1.4'
              }
        ]
    },
    exercise:                             {
        "id": 13,
        "courseId": 4,
        "description": "\\item Consider the vectors $\\vec{x} = [2,3,4]^T, \\vec{y} = [1,0,2]^T$ and $\\vec{z} = [0,1,0]^T$ in $\\mathbb R^3$. \\begin{enumerate} \\item Are the vectors $\\vec{x},\\vec{y}$ and $\\vec{z}$ linearly dependent? \\item Find a vector $\\vec{w} \\in \\mathbb{R}^3$ such that $\\vec{x},\\vec{y}$ and $\\vec{w}$ are linearly independent. \\item Find a vector $\\vec{v} \\in \\mathbb{R}^3$ such that $\\vec{x},\\vec{z}$ and $\\vec{v}$ are linearly independent. \\end{enumerate}",
        "name": "Exercise 1.1"
    },
    chatId: 0,
    hints: null
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
    const [course, setCourse] = useState(null)
    const [exercise, setExercise] = useState(null)
    const [showHome, setShowHome] = useState(true)
    const [showChat, setShowChat] = useState(true)
    const [showHints, setShowHints] = useState(true)
    const [state, dispatch] = useReducer(combinedReducer, initialState);

    return (
        <DataContext.Provider value={{course, setCourse,exercise, setExercise, showHints, setShowHints, showHome, setShowHome, state, dispatch, showChat, setShowChat, hints, setHints, courseId, setCourseId, user, setUser, idCount, setIdCount }}>
            {children}
        </DataContext.Provider>
    )
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};