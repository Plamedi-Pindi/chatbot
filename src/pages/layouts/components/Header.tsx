// Icons
import { BsX } from "react-icons/bs"

import botImage from "/bot.jpg";

export default function Header() {
    return (
        <div className="bg-black w-full h-16">
            <div className=" flex flex-raw justify-between items-center h-full w-full pl-3 pr-3">
                {/*  */}
                <div className="flex text-white items-center">
                    {/* Bot image */}
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center"><img src={botImage} className="w-[80%] rounded-full object-cover " /></div>
                    <div className="ml-2">
                        <h3 className="text-sm font-medium">UMA bot</h3>
                        <p className="text-xs">AI Assist</p>
                    </div>
                </div>

                {/*  */}
                <button className="text-white">
                    <BsX className="text-3xl" />
                </button>
            </div>
        </div>
    )
}
