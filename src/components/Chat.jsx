import Card from './ui/cards/Card';
import CardTitle from './ui/cards/CardTitle';
import CardBody from './ui/cards/CardBody';
import { TextInput } from './forms/TextInput';
import { ChooseCourse, ChooseExercise } from './forms/ChooseCourse';
import React, { useContext, useState } from 'react';
import LatexRenderer from './RenderMarkdown';
import ChatBox from './ui/chatbox/Chatbox';
import { TextButton } from './ui/buttons/TextButton';
import { LoadingButton } from './ui/buttons/LoadingButton';
import { getHints, sendChat } from '../controllers/chat';
import PropTypes from 'prop-types';
import { DataContext, DataProvider } from '../context/DataContext';
import axios from 'axios';

export const Chat = ({ course, setCourse, exercises, setExercises, exercise, setExercise,
  messages, setMessages, QuestionState, setQuestionState, history, setHistory, title, setTitle, courses }) => {

  const [loading, setLoading] = useState(false)  
  const [hints, setHints] = useState([])
  const [hintCount, setHintCount] = useState(0)
  const [chatId, setChatId] = useState(0)
  const [disableHintsButton, setDisableHintsButton] = useState(false)

  // Unused components from here were moved to below the Chat component
  
  const sendMessage = async (message)=>{
    console.log(messages)
    setLoading(true)
    const answer = await sendChat(message, chatId, exercise.id)
    setLoading(false)
    console.log(answer)
    setChatId(answer.chatId)
    const element = {
      text: answer.answer,
      isAnswer: true,
      id: messages.length + 2
    }
    return element
  }  

  const value = useContext(DataContext)

// items-center  justify-center <div className='flex w-full h-full'>
  return (
    <div className='w-full bg-site min-h-screen flex justify-center shadow-2xl'>
      <div className="w-3/4 my-20 ">
        <div className='container mx-auto p-4 h-full'>
          <div className='p-2 w-full h-5/6'>
            <ChatBox messages={value.messages}/>
          </div>
          <div className='p-2 w-full h-1/6'>
            <TextInput placeholder='Ask AIbert...' messages={value.messages} setMessages={value.setMessages} loading={loading} onClick={sendMessage} textstyle={'secondary'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

Chat.propTypes = {
  course: PropTypes.string,
  setCourse: PropTypes.func,
  exercises: PropTypes.array,
  setExercises: PropTypes.func,
  exercise: PropTypes.object,
  setExercise: PropTypes.func,
  messages: PropTypes.array,
  setMessages: PropTypes.func,
  QuestionState: PropTypes.number,
  setQuestionState: PropTypes.func,
  history: PropTypes.array,
  setHistory: PropTypes.func,
  title: PropTypes.string,
  setTitle: PropTypes.func,
  courses: PropTypes.array
}


export default Chat

// unused previous components: 
/*

const Conversation = () => {
    setQuestionState(3)
    setHintCount(0)
    setChatId(0)
    setHints([])
  }

  const FormNewQuestionExercise = () => {
    setQuestionState(2)
    setHintCount(0)
    setChatId(0)
    setHints([])
    setExercise("")
  }

  const FormNewQuestionCourse = () => {
    if (history.map(oldChat => oldChat.id).includes(chatId)) {
      const updatedObject = {
          exercise: exercise,
          course: course,
          messages: messages,
          QuestionState: QuestionState,
          id: chatId
      }
      setHistory(history.filter(oldChat => oldChat.id !== chatId).concat(updatedObject))
    }
    else if (messages.length !== 0) {
      const newObject = {
        exercise: exercise,
        course: course,
        messages: messages,
        QuestionState: QuestionState,
        id: history.length + 1
      }
      setHistory(history.concat(newObject))
    }
    setQuestionState(1)
    setCourse({})
    setExercise({})
    setTitle("New Chat")
    setMessages([])
    setHintCount(0)
    setChatId(0)
    setHints([])
    setChatId(history.length+1)
  }

  const UpdateCourse = (course) => {
    setCourse(course)
    setTitle("Chat")
    setExercises(course.assignments)
  }

  const handleGetHints = async () => {
    console.log(exercise.id)
    setLoading(true)
    const hint = await getHints(exercise.id)
    console.log(hint)
    setChatId(hint.chatId)
    setHints(hint.answer.split("\n"))
    setHintCount(1)
    setLoading(false)
  }


      {QuestionState ===3 && exercise.name &&
        <div className={`p-2 text-primary`}>
        <CardBody cardstyle="chatbox">
            <span className={`font-bold pb-1 text-secondary`}>Assignment:</span>
          <LatexRenderer value={exercise.description}/>
          {hints.length === 0 && <div className='flex justify-end'>
            {loading ?<LoadingButton/>
            :
                <TextButton onClick={handleGetHints} className={`font-bold bg-background text-secondary`}>
              Get Hints
            </TextButton>
            }
          </div>}
          {hints.length > 0 && 
          <><div className='font-bold'>Hints:</div>
            {hints.slice(0,hintCount+1).map((line, i) => (
              <LatexRenderer key={i} value={line} />
            ))}
          </>}
          { hintCount<hints.length-1 && hintCount!==0 && 
              <TextButton onClick={() => {
                setHintCount(hintCount + 1)
                setDisableHintsButton(true)
                setTimeout(setDisableHintsButton(false), 100000)
              }} buttonstyle={disableHintsButton ? 'disabled' : ''}
                className={`font-bold bg-background text-secondary`}>
            Next Hint
          </TextButton>
          }
        </CardBody>
      </div>
      } 

        // just used for the testing of the frontend. Can be removed after changing
        // dependencies to value.messages below.
        const [testMessages, setTestMessages] = useState([])
        axios.get('http://localhost:3001/messages').then(response => {
          setTestMessages(response.data)
        })
        const sendMessageTesting = (testMessage) => {
          axios.post('http://localhost:3001/messages', testMessage)
          setTestMessages(testMessages.concat(message))
  }

*/
  