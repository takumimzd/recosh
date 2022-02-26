import { Axios } from "../base/axios"

const get = async (url: string) => {
  try {
    const response = await Axios.get(url).then(res => res.data)
    return response
  } catch (error) {
    throw error
  }
}

export default get