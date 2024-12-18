import { useState } from "react"

export default function RenderedProps({ children }: { children: (name: string, setName: (name: string) => void) => JSX.Element }) {
    const [name, setName] = useState("John")

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold">I am a render prop pattern</h1>
            {children && children(name, setName)}
        </div>
    )
}