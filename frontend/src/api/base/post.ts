import { Axios } from "./axios"

export const Post = async (url: string, data: any) => {
  try {
    const response = await Axios.post(url, data)
    return response.data
  } catch (error) {
    throw error
  }
}