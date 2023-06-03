import { useContext } from "react"
import { authContext } from "../Providers/AuthProvider"
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const {user} = useContext(authContext)
  
    const token = localStorage.getItem('access-token');
    const { refetch, data: isAdmin } = useQuery({
        queryKey: ['allUsers', user?.email],
        queryFn: async () => {
            
            if(!user){
                return []
            }
            const res = await fetch(`http://localhost:5000/allUsers/admin/${user?.email}`, {
                headers:{
                    authorization: `bearer ${token}`
                }
            })
            const data = await res.json()
            return data.admin
        }
    })
    return [refetch, isAdmin]
}
export default useAdmin