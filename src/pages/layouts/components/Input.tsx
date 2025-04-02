// Icons
import { FaPaperPlane } from "react-icons/fa6";

// Hooks
import { useState } from "react";
import { useChat } from "../../../contexts/ChatContext";

export default function Input() {
  const [text, setText] = useState("");
  const { addChatMessage } = useChat();
  // 
  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }

  // 
  const inputState = text.length == 0 ? true : false;

  // 
  const sendMessage = () => {
    if (!inputState) {
      addChatMessage(text);
      setText("");
    }
  }

  return (
    <div className="fixed -bottom-2 w-full bg-white">
      <div className="bg-neutral-100 w-[90%] h-20 m-auto mb-6 block rounded-lg flex items-center">
        <textarea onChange={handleChangeInput} value={text} placeholder="Pergunte Algumas coisa..." className=" h-full w-[85%] bg-neutral-100 outline-none rounded-l-lg p-2 text-zinc-800 text-sm overflow-auto scrollbar-hide"></textarea>

        <button onClick={sendMessage} className={`outline-none w-8 h-8 rounded-full flex items-center ${inputState ? "bg-zinc-500 " : "bg-zinc-900 "}`} >
          <FaPaperPlane className="text-md text-zinc-200 ml-1.5" />
        </button>
      </div>
    </div>
  )
}
