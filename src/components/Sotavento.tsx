

export default function Sotavento() {
    return(
        <>
            <img
                className="mt-5 object-cover w-full h-96 lg:h-[600px]"
                src="/images/sotavento.jpg" alt="."
            />
            <div className="mt-4 uppercase lg:grid lg:grid-rows-2 lg:grid-cols-4 lg:grid-flow-col">
                <h2 className="lg:col-span-2 row-span-2 text-lg lg:text-xl">Sotavento</h2>

                <div className="mt-6 lg:mt-0 lg:col-span-2 flex flex-col">
                    <div className="flex items-center gap-6 lg:gap-40 lg:pr-40">
                        <h2 className="text-lg lg:text-xl">Location/</h2>
                        <p className="text-lg lg:text-xl">Tampico, MX</p>
                    </div>
                    <hr className="h-px mt-2 border-0 bg-gray-500"></hr>

                    <div className="mt-4 flex items-center gap-16 lg:gap-52 lg:pr-40">
                        <h2 className="text-lg lg:text-xl">Date/</h2>
                        <p className="text-lg lg:text-xl">20-04-21</p>
                    </div>
                    <hr className="h-px mt-2 border-0 bg-gray-500"></hr>
                </div>
                
            </div>
        </>
    )
}