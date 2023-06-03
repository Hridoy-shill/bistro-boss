import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';

const useCart = () => {
    const { user } = useContext(authContext)
    const token = localStorage.getItem('access-token');
    
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['allCarts', user?.email],
        queryFn: async () => {
            
            if(!user){
                return []
            }
            const res = await fetch(`http://localhost:5000/allCarts?email=${user?.email}`, {
                headers:{
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        }
    })

    return [cart, refetch]

};

export default useCart;