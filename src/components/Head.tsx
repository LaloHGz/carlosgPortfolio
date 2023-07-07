import Link from "next/link";

export default function Head(){
    return(
        <div className="flex justify-between">
            <div className="flex flex-col text-lg lg:text-xl gap-2">
                <button className="btn uppercase btn-head">
                    Overview
                </button>
                <button className="btn uppercase btn-head">
                    Projects
                </button>
            </div>

            <div className="text-end flex flex-col gap-1">
                <div className="flex flex-col gap-0 lg:gap-28 lg:flex-row">
                    <Link href="mailto:carloshdzgomez@gmail.com">
                        <div className="flex items-center justify-end">
                            <span className="h-2 w-2 lg:h-4 lg:w-4 rounded-full bg-[#FF9933] mr-2"></span>
                            <p className="uppercase text-lg lg:text-xl">Contact</p>
                        </div>
                    </Link>
                    <p className="uppercase">+52 833 147 1058</p>
                </div>
                <p className="uppercase text-sm">Tampico, MX</p>
                
            </div>

        </div>
    )
}