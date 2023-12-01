import axios from "axios"

const baseUrl = 'https://ai-bert-backend-qrwoug6p3q-lz.a.run.app'

export const sendChat = ({ content, chatId, assignment, hints }) => {
    const body = {
      content: content,
      userId: 1
    }
    let url = ''
    if( hints !== null && chatId !== 0){
      url = `${baseUrl}/api/chat/hints/${chatId}`
      body.assignmentId = assignment.id
    } else if(assignment !== null){
      url = chatId=== 0 ? `${baseUrl}/api/chat/assignment` : `${baseUrl}/api/chat/assignment/${chatId}`
      body.assignmentId = assignment.id
    } else {
      url = chatId=== 0 ? `${baseUrl}/api/chat/normal` : `${baseUrl}/api/chat/normal/${chatId}`
    }
    console.log(url, body)
    return axios.post(url, body)
}

export const getHints = async (assignmentId) => {
  const body = {
    userId: 1,
    assignmentId: assignmentId
  }
  const res = await axios.post('https://ai-bert-backend-qrwoug6p3q-lz.a.run.app/api/chat/hints', body)
  return res.data
}


