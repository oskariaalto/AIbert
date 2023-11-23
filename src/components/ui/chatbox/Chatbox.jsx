import CardBody from "../cards/CardBody";
import { AnswerBubble } from "./AnswerBubble";
import { QuestionBubble } from "./QuestionBubble";
import PropTypes from 'prop-types'

const ChatBox = ({ messages }) => {

    console.log(messages)  

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

    return (
        <CardBody cardstyle={"chatbox"}>
            {testMessages.map(message =>
                <div key={message.id} className="h-auto w-7/8 p-1">
                    { message.isAnswer  ? <AnswerBubble text={message.text} /> : <QuestionBubble text={message.text} />}
                </div>
            )}
        </CardBody>
    )
}

ChatBox.propTypes = {
    messages: PropTypes.array
}


export default ChatBox