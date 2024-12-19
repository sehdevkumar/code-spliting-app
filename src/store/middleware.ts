import { ActionSetLoading } from "./actions"

 const customMiddleware  = (store: any) => {
    return (next: any) => async (action: any) => {
       
        if (action.type === 'SET_LOADING') {
            setTimeout(() => {
                store.dispatch(ActionSetLoading(false))
            }, 2000)
        }

        next(action)
    }
}


export default customMiddleware