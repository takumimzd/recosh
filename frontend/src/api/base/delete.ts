import { Axios } from "@/api/base/axios"

export const Delete = async (url: string) => {
  try {
    const response = await Axios.delete(url)
    return response.data
  } catch (error) {
    throw error
  }
}