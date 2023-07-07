import Image from "next/image";

export default function Biography() {
    return (
        <div className="mt-16 lg:mt-28">

            <h1 className='uppercase text-[4rem] lg:text-[6rem]'>
                CARLOS GÓMEZ
            </h1>

            <div className="flex flex-col mt-16 lg:mt-28 gap-4 lg:flex-row">
                <Image
                    width={500}
                    height={500}
                    className="object-cover"
                    src="/images/foto1.jpg" alt="."
                />
                <div className="flex flex-col justify-between">
                    <p className="w-[70%] text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum numquam ipsa fugiat cupiditate explicabo ratione enim quisquam hic exercitationem aut ea rerum impedit recusandae suscipit repellat praesentium consequatur dignissimos itaque cum commodi, saepe beatae. Vero nihil impedit quidem ipsam molestias consequatur hic perspiciatis, rem sit excepturi consectetur! Rem, nemo.
                    </p>
                    
                    <div className="mt-10 h-[350px] w-full bg-[#FF9933] relative">
                        {/* <div className="absolute inset-0 flex items-center justify-center"> */}
                        <div className="absolute top-3 right-3">
                            <Image
                                width={100}
                                height={100}
                                className="object-cover"
                                src="/images/logo.jpeg"
                                alt="logo"
                            />
                        </div>
                        <p className="absolute bottom-0 left-0 mb-2 ml-2 text-white text-lg">#FF9933</p>

                    </div>
                </div>

            </div>
        </div>
    )
}