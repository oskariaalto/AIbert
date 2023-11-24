export const QuestionBubble = ({ text }) => {
  return(
    <div className="chat chat-end w-auto h-auto">
      <div className="chat-bubble bg-secondary text-background">
        {text}
      </div>
    </div>
  )
}