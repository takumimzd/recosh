import { Axios } from "./axios"

export const Delete = async (url: string) => {
  try {
    const response = await Axios.delete(url)
    return response.data
  } catch (error) {
    throw error
  }
}