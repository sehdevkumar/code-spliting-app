import { useEffect } from "react";
import RenderedProps from "../Patterns/RenderedProps";
import { useAppDispatch, useAppStore } from "../store/store";
import { ActionFetchData } from "../store/actions";
import { Loader } from "../components/Loader";

type Album = {
    albumId: number,
    id: number,
    thumbnailUrl: string,
    title: string,
    url: string
}

export default function Profile() {    
    const {message, error, isLoading,data} = useAppStore()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (error) {
            alert(error)
        }
        if (message) {
            alert(message)
        }
        if (data) {
            console.log(data,"Hello")
        }
    }, [error, message,data])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="col-span-1">
                {isLoading && <Loader />}
            </div>
            <div className="col-span-1">
                <RenderedProps>
                    {(name: string, setName: (name: string) => void) => (
                        <div className="bg-white rounded-lg p-8 shadow-md">
                            <h1 className="text-4xl font-bold">{name}</h1>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setName('Jane')}>Change Name</button>
                        </div>
                    )}
                </RenderedProps>
            </div>
            <div className="col-span-1">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                    dispatch(ActionFetchData())
                    
                }}>Set Loading</button>
            </div>
            {data && (
                <div className="col-span-3 grid grid-cols-3 gap-4">
                    {data.slice(0, Math.floor(Math.random() * 100)).map((album: Album) => (
                        <div key={album.id} className="bg-white rounded-lg p-4 shadow-md">
                            <img src={album.thumbnailUrl} alt={album.title} className="w-full h-auto mb-4"/>
                            <h2 className="text-xl font-bold">{album.title}</h2>
                            <a href={album.url} className="text-blue-500 hover:text-blue-700">View</a>
                        </div>
                    ))}
                </div>
            )}
        </div>

    )
}