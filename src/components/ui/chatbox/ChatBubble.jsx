import { useEffect } from "react"
import PropTypes from 'prop-types'

const BubbleStyles ={
    //answerBubble: `h-auto bg-secondary flex py-2 px-2 pl-4 font-normal w-full outline-none text-lg text-background resize-none min-h-12 rounded-lg text-left`,
    //questionBubble: `h-auto bg-primary flex py-2 px-2 pl-4 font-normal w-full outline-none text-lg text-background resize-none min-h-12 rounded-lg text-left
    answerBubble: '<div class="chat chat-start">'
}

const divStyles = {
    answerBubble: 'flex w-4/5 h-full p-1',
    questionBubble: 'flex w-4/5 h-full p-1'
}

const ChatBubble = ({ text, id, isAnswer }) => {
    const style = isAnswer ? 'answerBubble' : 'questionBubble'

    useEffect(() => {
        const resizeChatBubble = () => {
            const textarea = document.getElementById(`chatBubble-${id}`);
            textarea.style.height = textarea.scrollHeight + 'px';
        };
        resizeChatBubble();
    }, [id]);
    
    console.log(style)
    return (
        
        <div className={divStyles[style]}>
            <textarea
                readOnly
                className={BubbleStyles[style]}
                style={{ overflow:'hidden'}}
                type="text"
                id={`chatBubble-${id}`}
                value={text}
            >
            </textarea>
        </div>
        
    )
}

ChatBubble.propTypes = {
    text: PropTypes.string,
    id: PropTypes.number,
    isAnswer: PropTypes.bool
}


export default ChatBubble