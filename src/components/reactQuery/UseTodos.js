import { useQuery } from '@tanstack/react-query'
import { CACHE_KEY_TODOS } from './constants'
import APIClient from './services/apiClient'

const apiClient = new APIClient('/todos')

const UseTodos = () => {
  return useQuery({
    queryKey: CACHE_KEY_TODOS,
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000
  })
}

export default UseTodos