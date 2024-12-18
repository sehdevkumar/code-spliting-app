import RenderedProps from "../Patterns/RenderedProps";

export default function Profile() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
            <RenderedProps>
                {(name: string, setName: (name: string) => void) => (
                    <div className="bg-white rounded-lg p-8 shadow-md">
                        <h1 className="text-4xl font-bold">{name}</h1>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setName('Jane')}>Change Name</button>
                    </div>
                )}
            </RenderedProps>
        </div>

    )
}