import Header from "./components/Header"

const App = () => {
    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            <div className="w-[80%] mx-auto pt-10">
                <Header />

                <div className="flex justify-between h-[85vh] gap-3">
                    <div className="w-1/2 border h-[90%] ps-2">
                        <h1 className="text-lg font-bold">Editor</h1>
                    </div>
                    <div className="w-1/2 border h-[90%] ps-2">
                        <h1 className="text-lg font-bold">Previewer</h1>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default App