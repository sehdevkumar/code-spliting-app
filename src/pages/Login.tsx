export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
            <h1 className="text-6xl font-bold text-white">Login</h1>
            <form className="mt-8 space-y-4">
                <label className="block">
                    <span className="text-white">Email</span>
                    <input className="mt-1 block w-full px-4 py-2 bg-white rounded-md" type="email" />
                </label>
                <label className="block">
                    <span className="text-white">Password</span>
                    <input className="mt-1 block w-full px-4 py-2 bg-white rounded-md" type="password" />
                </label>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" type="submit">Login</button>
            </form>
        </div>
    );
}