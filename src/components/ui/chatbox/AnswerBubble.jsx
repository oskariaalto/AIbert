import PropTypes from 'prop-types';
import { MathJax } from 'better-react-mathjax';


export const AnswerBubble = ({ text }) => {
  return(
    <div className="chat chat-start w-auto h-auto">
      <div className="chat-bubble bg-background text-primary">
        <MathJax dynamic>
          {text}
        </MathJax>
      </div>
    </div>
  )
}
AnswerBubble.propTypes = {
  text: PropTypes.string
}
