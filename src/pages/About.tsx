import RenderedProps from "../Patterns/RenderedProps";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center h-screen p-4">
            <RenderedProps>
                {(name: string, setName: (name: string) => void) => (
                    <div className="bg-white rounded-lg p-4 shadow-md">
                        <h1 className="text-4xl font-bold">{name}</h1>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setName('Jane')}
                        >
                            Change Name
                        </button>
                    </div>
                )}
            </RenderedProps>
        </div>
    )
}