// Components
import { useChat } from "../contexts/ChatContext";
import botImage from "/bot.jpg";

export default function Home() {
  const { chatMessages } = useChat();
  return (
    <div className="h-screen ">
      <div className="flex flex-col justify-end  p-4 h-full text-sm ">
        {chatMessages.map((list) => list.userID == 1 ? (
          <div key={list.id} className="bg-black text-white mt-2 p-3 rounded-se-xl rounded-s-xl max-w-[87%] ml-auto   "> {list.message} </div>
        ) : (
          <div key={list.id} className=" mt-2 mb-2 w-fit max-w-[88%]  mr-auto flex">
            {/* Bot img */}
            <img src={botImage} className="w-[1.4rem] h-[1.4rem] object-cover rounded-full mr-2" />
            {/* Bot message */}
            <div className="bg-zinc-200  text-neutral-800 p-4  rounded-es-xl rounded-e-xl ">
              ola, como estas? slfmldmf dmflasd; fmsd;lf smdflsd;fmsldf sdmfld;smf sdmfl;csd fsmfkldfkld ola ele e ou
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
