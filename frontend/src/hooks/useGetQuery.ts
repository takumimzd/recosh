import { useRouter } from "next/router";

const useGetQuery = (params: string) => {
  const router = useRouter();
  const query = router.query[params]
  if (!query) return null
  return query
}

export default useGetQuery