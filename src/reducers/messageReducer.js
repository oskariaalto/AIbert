export const combinedReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_COURSE":
      return { ...state, course: action.payload };
    case "SET_EXERCISE":
      return { ...state, exercise: action.payload };
    case "SET_HINTS":
      return { ...state, hints: action.payload };
    case "SET_CHATID":
      return { ...state, chatId: action.payload };
    default:
      return state;
  }
} 
