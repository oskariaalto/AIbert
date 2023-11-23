export const AnswerBubble = ({ text }) => {
  return(
    <div className="chat chat-start w-auto h-auto">
      <div className="chat-bubble bg-background text-primary">
        {text}
      </div>
    </div>
  )
}