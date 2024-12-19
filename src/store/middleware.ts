
const customMiddleware = (store: any) => {
    return (next: any) => async (action: any) => {
        if (action.type === 'FETCH_DATA') {
            store.dispatch({ type: 'SET_LOADING', payload: true });
            // Only handle loading state if it's being set to true
                try {
                    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                    const data = await response.json();
                    store.dispatch({ type: 'SUCCESS_FETCH', payload: data });
                    store.dispatch({ type: 'SET_LOADING', payload: false });

                } catch (error) {
                    store.dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch data' });
                    store.dispatch({ type: 'SET_LOADING', payload: false });
                    console.error(error);
                }
        }
        
        return next(action); // Ensure to call next(action) to continue the middleware chain
    }
}

export default customMiddleware;