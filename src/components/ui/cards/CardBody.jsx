import PropTypes from 'prop-types'

const cardStyles = {
  primary: `bg-background p-2 shadow-xl rounded-xl w-full h-full`,
  answerBubble: `bg-secondary w-full h-full shadow-xl rounded-xl p-1`,
  questionBubble: `bg-primary w-full h-full shadow-xl rounded-xl p-1`,
  chatbox: `bg-site p-2 rounded-xl w-full h-full max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-background scrollbar-track-gray`
}


const CardBody = ({cardstyle, ...props}) => {
  return(
    <div className={cardStyles[cardstyle || 'primary']} {...props}/>
  )};

CardBody.propTypes = {
  cardstyle: PropTypes.string,
  onClick: PropTypes.func
}

export default CardBody;