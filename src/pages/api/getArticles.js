import { axiosGet } from "@/utils";

export async function getListOfArticles(params) {
    try {
      const url='everything'
  
      const response = await axiosGet({ url,params })
  
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
  
  // documentation
  // The getListOfArticles function is a specific implementation
  //  for fetching a list of articles from an API endpoint using the
  //   axiosGet utility function. This function demonstrates
  //  how to centralize API calls for better code reuse and error handling