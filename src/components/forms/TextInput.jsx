import { useState, useContext,useRef, useEffect } from "react";
import { FileInput } from "./FileInput";
import { IconButton } from "../ui/buttons/IconButton";
import { AiOutlineFileAdd, AiOutlineSend } from "react-icons/ai";
import { DataContext } from "../../context/DataContext";
import { useMutation } from "@tanstack/react-query";
import { sendChat } from "../../controllers/chat";
import PropTypes from 'prop-types'
import { useLocation, useNavigate } from "react-router-dom";

const textAreaStyles = {
  primary: `bg-background flex text-grey-darker py-2 px-3 pl-12 pr-12 text-secondary border border-primary w-full h-12 outline-none text-lg resize-none rounded-lg max-h-64 overflow-y-auto shadow-2xl`,
  secondary: `bg-background flex text-grey-darker py-2 px-3 pl-12 pr-12 text-secondary border border-primary w-full h-12 outline-none text-lg resize-none rounded-lg max-h-32 overflow-y-auto shadow-2xl`,
}

const buttonWrapper = `flex items-end bg-background rounded-lg border-0 px-1 font-bold text-primary absolute bottom-3 hover:text-secondary`

export const TextInput = ({ placeholder, textstyle }) => {
    const textareaRef = useRef(null);
    const { setShowChat, setShowHome, dispatch, state } = useContext(DataContext);

    const chatMutation = useMutation({
      mutationFn: sendChat,
      mutationKey: 'sendChat',
      onSuccess: (data) => {
        console.log("success", data, data.data, data.data.answer)
        const element = {
          text: data.data.answer,
          isAnswer: true,
        }
        dispatch({ type: 'ADD_MESSAGE', payload: element })
        dispatch({type: 'SET_CHATID', payload: data.data.chatId})
      },
      onError: (error) => {
        console.log(error)
      }
    })

    const [curMessage, setCurMessage] = useState('')
    const [shift, setShift] = useState(false)

    const handleInput = () => {
      textareaRef.current.style.height = '50px';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    };

    useEffect(() => {
      handleInput();
    }, [curMessage]);
   
    const handleChange = (event) => {
      event.preventDefault();
      //console.log(event)
      if( event.target.value.slice(-1) !== "\n" || shift){
        setCurMessage(event.target.value);
      } else if (event.target.value.slice(-1) === "\n" && !shift) {
        sendMessage(curMessage)
      }
    };
  
    const sendMessage = async (content) => {
      if (content === "")
        return
      const message = {
        "text": content,
        "isAnswer": false
      }
      dispatch({ type: 'ADD_MESSAGE', payload: message })
      setCurMessage('')
      chatMutation.mutate({ content, chatId: state.chatId, assignment: state.exercise, hints: state.hints })
      if (location.pathname === "/") {
        setShowHome(false)
        setShowChat(true)
        setTimeout(() => {
          navigate('/chat')
        }, 500) 
      }
    }
  
  const navigate = useNavigate()
  const location = useLocation()
  
  return(
    <div className="hero bg-gradient-dark h-auto flex flex-col">
      <div className="search-box mx-auto my-auto w-full">
        <form className="flex flex-col relative z-20 w-full">
          <span className={`${buttonWrapper} left-2`}>
            <FileInput> 
                <AiOutlineFileAdd size={28}/>
            </FileInput>
          </span>
          <textarea
            ref={textareaRef}
            className={textAreaStyles[textstyle || 'primary']}
            placeholder={placeholder}
            type="text"
            id="resizeTextarea"
            onChange={handleChange}
            onKeyPress={event => setShift(event.shiftKey)}
            value={curMessage}
          ></textarea>
          <span className={`${buttonWrapper} right-2`}>
            <IconButton onClick={async () => {
              event.preventDefault()
              sendMessage(curMessage)
              }}>
              {chatMutation.isPending ? <span className="loading loading-spinner"></span> :<AiOutlineSend size={28}/>} 
            </IconButton>
          </span>
        </form>
      </div>
    </div>
  )};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  textstyle: PropTypes.string,
  setMessages: PropTypes.func,
  messages: PropTypes.array,
  onClick: PropTypes.func,
  loading: PropTypes.bool
}


/*
      setIdCount(idCount + 1)
      console.log(idCount)
      const message = {
        "text": content,
        "id": idCount,
        "isAnswer": false
      }
      axios.post("http://localhost:3001/messages", message).then(response => {
        setMessages(response.data)
        setCurMessage('')
      })
*/
