import { useState, useContext,useRef } from "react";
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
    const { messages, setMessages } = useContext(DataContext);

    const chatMutation = useMutation({
      mutationFn: sendChat,
      mutationKey: 'sendChat',
      onSuccess: (data) => {
        console.log("success")
        setMessages([...messages, data.data])
      },
      onError: (error) => {
        console.log(error)
      }
    })

    const [curMessage, setCurMessage] = useState('')
    const [shift , setShift] = useState(false)

    const handleInput = () => {
          textareaRef.current.style.height = '50px';
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };
   
    const handleChange = (event) => {
      event.preventDefault();
      //console.log(event)
      if( event.target.value.slice(-1) !== "\n" || shift){
        handleInput();
        setCurMessage(event.target.value);
      } else if (event.target.value.slice(-1) === "\n" && !shift){
        sendMessage(curMessage)
      }
    };
  
    const sendMessage = async (content) => {
      if (content === "")
        return
      chatMutation.mutate({ content })
      setCurMessage('')
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
              if (location.pathname === "/") {
                navigate('/chat')
              }
              sendMessage(curMessage)
              }}>
              {chatMutation.isPending ?<span className="loading loading-spinner"></span> :<AiOutlineSend size={28}/>} 
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
