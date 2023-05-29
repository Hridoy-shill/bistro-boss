import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';

const useCart = () => {
    const { user } = useContext(authContext)
    
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            
            if(!user){
                return []
            }
            const res = await fetch(`http://localhost:5000/allCarts?email=${user.email}`)
            return res.json();
        }
    })

    return [cart, refetch]

};

export default useCart;