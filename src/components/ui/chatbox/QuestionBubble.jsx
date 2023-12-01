import PropTypes from 'prop-types'
import { MathJax } from 'better-react-mathjax';

export const QuestionBubble = ({ text }) => {
  return(
    <div className="chat chat-end w-auto h-auto">
      <div className="chat-bubble bg-secondary text-background">
        <MathJax dynamic>
          {text}
        </MathJax>
      </div>
    </div>
  )
}

QuestionBubble.propTypes = {
  text: PropTypes.string
}