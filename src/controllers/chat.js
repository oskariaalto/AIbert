import axios from "axios"

const baseUrl = 'https://ai-bert-backend-qrwoug6p3q-lz.a.run.app'

export const sendChat = ({ content }) => {
    const body = {
      content: content,
      userId: 1
    }
    const url = `${baseUrl}/api/chat/normal`
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


