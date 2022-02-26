import useSWR from "swr"

interface useFetchProps {
  key: string,
  fetcher: () => Promise<any>
}
const useFetch = <T>({key, fetcher}: useFetchProps) => {
  
  const { data, error } = useSWR<T>(key, fetcher)
  
  return { data, error }
}

export default useFetch