export default function Contact() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold">Contact</h1>
            <p className="text-2xl">Get in touch with me</p>
            <form className="flex flex-col w-1/2">
                <label className="block text-xl font-semibold" htmlFor="name">Name</label>
                <input className="block w-full px-4 py-2 my-2 border-2 border-gray-300 rounded-md" type="text" id="name" name="name" />
                <label className="block text-xl font-semibold" htmlFor="email">Email</label>
                <input className="block w-full px-4 py-2 my-2 border-2 border-gray-300 rounded-md" type="email" id="email" name="email" />
                <label className="block text-xl font-semibold" htmlFor="message">Message</label>
                <textarea className="block w-full px-4 py-2 my-2 border-2 border-gray-300 rounded-md" id="message" name="message" rows={5} />
                <button className="block w-full px-4 py-2 my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md" type="submit">Send</button>
            </form>
        </div>
    );
}