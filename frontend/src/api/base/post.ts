import { Axios } from "@/api/base/axios"
import { AxiosResponse } from "axios"

export const Post = async <T>(url: string, data: any) => {
  try {
    const response = await Axios.post<T>(url, data)
    return { data: createPostResponeData(response) }
  } catch (error) {
    throw error
  }
}

const createPostResponeData = <T>(data: AxiosResponse<T, any>) => {
  const responseData = {
    status: data.status
  }
  return responseData
}