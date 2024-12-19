import { useEffect, useState } from "react";
import RenderedProps from "../Patterns/RenderedProps";
import { useAppDispatch, useAppStore } from "../store/store";
import { ActionSetLoading } from "../store/actions";
import { Loader } from "../components/Loader";

export default function Profile() {
    
    const [showLoader, setShowLoader] = useState(false)
    const {message, error, isLoading} = useAppStore()
    const dispatch = useAppDispatch()

    useEffect(() => {
        console.log(message, error, isLoading)
    }, [message, error, isLoading])

    useEffect(() => {
        if (isLoading) {
            setShowLoader(true)
            setTimeout(() => {
                setShowLoader(false)
            }, 2000)
        }
    }, [isLoading])

    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
            {showLoader && <Loader />}
            <RenderedProps>
                {(name: string, setName: (name: string) => void) => (
                    <div className="bg-white rounded-lg p-8 shadow-md">
                        <h1 className="text-4xl font-bold">{name}</h1>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setName('Jane')}>Change Name</button>
                    </div>
                )}
            </RenderedProps>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                dispatch(ActionSetLoading(true))
               
            }}>Set Loading</button>
        </div>

    )
}