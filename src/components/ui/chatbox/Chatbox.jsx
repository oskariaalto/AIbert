import CardBody from "../cards/CardBody";
import { AnswerBubble } from "./AnswerBubble";
import { QuestionBubble } from "./QuestionBubble";
import PropTypes from 'prop-types'
import { useContext, useRef, useEffect } from "react";
import { DataContext } from "../../../context/DataContext";

const ChatBox = () => { 
    const endOfChatsRef = useRef(null);
    const { state } = useContext(DataContext)
    const messages = state.messages

    const scrollToBottom = () => {
        endOfChatsRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    // axios.get("http://localhost:3001/messages").then(response => {
    //    const messages = response.data
    return(
        <CardBody cardstyle={"chatbox"}>
        {messages.map((message, index) =>
            <div key={index} className="h-auto w-auto p-1">
                { message.isAnswer  ? <AnswerBubble text={message.text} /> : <QuestionBubble text={message.text} />}
            </div>
        )}
         <div className="p-6" ref={endOfChatsRef}/>
        </CardBody>
    )
   // })
}

ChatBox.propTypes = {
    messages: PropTypes.array
}

export default ChatBox

/*          :)
    
    const testMessages = [
        {
            id: 1,
            isAnswer: false,
            text: `Question number 1`
        },
        {
            id: 2,
            isAnswer: true,
            text: `Answer number 1`
        },
        {
            id: 3,
            isAnswer: false,
            text: `Question number 2`
        },
        {
            id: 4,
            isAnswer: true,
            text: `Answer number 2`
        },
        {
            id: 5,
            isAnswer: false,
            text: `Question number 3, which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,`
        },
        {
            id: 6,
            isAnswer: true,
            text: `Answer number 3, which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,, which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,`
        },
        {
            id: 7,
            isAnswer: false,
            text: `Question number 4, which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,, which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,`
        },
        {
            id: 8,
            isAnswer: true,
            text: `Answer number 4, which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,`
        },
        {
            id: 9,
            isAnswer: false,
            text: `Question number 5, which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,
            which is longer to see how longer messages behave,`
        },
        {
            id: 10,
            isAnswer: true,
            text: `Answer number 5, which is longer to see how longer messages behave,
             which is longer to see how longer messages behave,
             which is longer to see how longer messages behave,
             which is longer to see how longer messages behave,
             which is longer to see how longer messages behave,`
        },
    ]
*/