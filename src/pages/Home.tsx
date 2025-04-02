// Components
import botImage from "/bot.jpg";
import Header from "./layouts/components/Header";
import Input from "./layouts/components/Input";

// Hooks 
import { useChat } from "../contexts/ChatContext";
import { useEffect, useRef } from "react";

export default function Home() {
  const { chatMessages } = useChat();
  const reversedMessage = [...chatMessages].reverse();
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = messagesContainerRef.current;
    const lastMessage = messagesEndRef.current;

    if (container && lastMessage) {
      lastMessage.scrollIntoView({ behavior: 'auto' });

      const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 1000;

      if (isNearBottom) {
        lastMessage.scrollIntoView({ behavior: 'smooth' });
      }
    }

  }, [chatMessages]);


  return (
    <div className="  ">
      {/* Header */}
      <Header />

      {/* Main content start */}
      <div ref={messagesContainerRef} className="flex flex-col-reverse h-screen min-h-0 p-4 overflow-y-auto  text-sm pt-[5rem] pb-[6rem] ">
        {reversedMessage.map((list) => (
          list.userID == 1 ? (

            <div key={list.id} className="bg-black text-white mt-2 p-3  rounded-se-xl rounded-s-xl max-w-[87%] ml-auto   "> {list.message} </div>

          ) : list.userID == 2 ? (

            <div key={list.id} className=" mt-2 mb-2 w-fit max-w-[88%]  mr-auto flex">
              {/* Bot img */}
              <img src={botImage} className="w-[1.4rem] h-[1.4rem] object-cover rounded-full mr-2" />
              {/* Bot message */}
              <div className="bg-zinc-200  text-neutral-800 p-4  rounded-es-xl rounded-e-xl ">
                ola, como estas? slfmldmf dmflasd; fmsd;lf smdflsd;fmsldf sdmfld;smf sdmfl;csd fsmfkldfkld ola ele e ou
              </div>
            </div>

          ) : null
        ))}

        <div ref={messagesEndRef} />
      </div>
      {/* Main content end */}

      {/* Input */}
      <Input />
    </div>
  )
}
