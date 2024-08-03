import { axiosGet } from "@/utils";

export async function getListOfResources() {
    try {
      const url='top-headlines/sources'
  
      const response = await axiosGet({ url })
  
      return response
    } catch (error) {
      if (error.response) {
        console.info('Request made and server responded')
        console.error(error.response.data)  
        console.error(error.response.status)
        console.error(error.response.headers)
      }
  
      return error
    }
  }