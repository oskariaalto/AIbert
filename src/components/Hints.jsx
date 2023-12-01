import { MathJax } from 'better-react-mathjax';
import { useState, useRef, useEffect, useContext } from "react";
import { TextInput } from './forms/TextInput';
import ChatBox from './ui/chatbox/Chatbox';
import { Transition } from "@headlessui/react"
import { DataContext } from '../context/DataContext';
import { getHints } from '../controllers/chat';

const Hints = () => {
  const [hintCount, setHintCount] = useState(0);
  const [loading, setLoading ] = useState(false);
  const endOfHintsRef = useRef(null);
  const {showHints, state, dispatch} = useContext(DataContext)

  const scrollToBottom = () => {
    endOfHintsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (hintCount > 0) {
          scrollToBottom();
      }
  }, 10); // Adjust the delay as needed for your transition

  return () => clearTimeout(timer);
  }, [hintCount]);

  const onGetHints = async () => {
    if (state.exercise === null) return;
    setLoading(true);
    const hints = await getHints(state.exercise.id);
    console.log(hints)
    dispatch({type: 'SET_HINTS', payload: hints.answer.split('\n')})
    dispatch({type: 'SET_CHATID', payload: hints.chatId})
    setHintCount(1);
    setLoading(false);
  }

  return (
    <div className='w-full bg-site h-screen flex justify-center'>
      <Transition
      as="div"
      appear={true}
      show={showHints}
      enter="transition-transform duration-500 transform ease-in-out"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition-transform duration-500 transform ease-in-out"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
      className="w-full my-16"
      >
        <div className='container w-3/4 mx-auto p-4 h-full flex flex-col'>
          <div className='flex-none p-2 flex gap-3 text-xl font-bold text-secondary'>
            {
              state.exercise !== null ? 'Hints for ' + state.exercise.name : 'Choose an exercise'
            }
          </div>
          {/* Hints container */}
          <div className={`flex-none card p-3 shadow-xl overflow-y-auto text-secondary relative z-20 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-background scrollbar-track-gray h-1/4`}>
            {state.hints!== null ?<><div className="text-md p-1">
              {state.hints.slice(0, hintCount).map((item, i) => (
                <div key={i} className="py-1">
                  <MathJax dynamic>{item}</MathJax>
                </div>
              ))}
              <div ref={endOfHintsRef}/>
            </div>
            <div className="sticky bottom-0 flex justify-end"> {/* Sticky positioned button */}
              <button
                className="py-2 px-3 rounded-xl font-bold bg-secondary text-primary hover:bg-primary hover:text-secondary"
                onClick={() => setHintCount(hintCount + 1)}
              >
                Next Hint
              </button>
            </div></>: 
            <div className="text-md p-1">
              <button
                  className="py-2 px-3 rounded-xl font-bold bg-secondary text-primary hover:bg-primary hover:text-secondary"
                  onClick={onGetHints}
                >
                {loading ? <div className='loading loading-spinner loading-md'/> : 'Get Hints'}
              </button>
            </div>}
          </div>
          {/* Chat box and input container */}
          <div className='flex-none relative h-3/4 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-scrollbar'> {/* Relative positioning for the container */}
            <div className=''> {/* ChatBox will scroll within this container */}
              <ChatBox />
            </div>
            <div className='sticky bottom-0 z-10 w-full'> {/* TextInput will enlarge upwards */}
              <TextInput placeholder='Ask AIbert...' textstyle="secondary"/>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );  
}

export default Hints;


