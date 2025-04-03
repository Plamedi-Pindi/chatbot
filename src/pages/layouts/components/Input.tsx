// Icons
import { FaPaperPlane } from "react-icons/fa6";

// Hooks
import React, { useState } from "react";
import { useChat } from "../../../contexts/ChatContext";
import { sendMessageToRasa } from "../../../apis/RasaService";
// const [isSending, setIsSending] = useState(false);


export default function Input() {
  const [inputMessage, setInputMessage] = useState<string>("");
  const { addChatMessage } = useChat();
  const [senderId] = useState(`user_${Math.random().toString(36).substr(2, 9)}`);
  const [isSending, setIsSending] = useState(false);

  // 
  const inputState = inputMessage.length == 0 ? true : false;

  // 
  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(e.target.value);
  }

  // Function to send a message
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    addChatMessage(inputMessage, 'user');
    setInputMessage("");
    setIsSending(true);

    try {
      // Envia mensagem para o Rasa
      const response = await sendMessageToRasa(inputMessage, senderId);

      // Processa a resposta do bot
      const botResponses = Array.isArray(response)
        ? response
        : response?.responses || [];

      botResponses.forEach((botMessage: { text?: string }) => {
        if (botMessage.text) {
          addChatMessage(botMessage.text, 'bot');
        }
      });
    } catch (error) {
      addChatMessage("Desculpe, ocorreu um erro ao processar sua mensagem.", 'bot');
      console.log(error);
    }finally{
      setIsSending(false);
    }
  }

  const sendMessage = () => {
    if (!inputState) {
      // addChatMessage(inputMessage);
    }
  }

  return (
    <div className="fixed -bottom-2 w-full bg-white">
      <form onSubmit={handleSubmit} className="bg-neutral-100 w-[90%] h-20 m-auto mb-6 block rounded-lg flex items-center">
        <textarea onChange={handleChangeInput} value={inputMessage} onKeyDown={(e) => e.key === 'Enter' && handleSubmit} placeholder="Pergunte Algumas coisa..." className=" h-full w-[85%] bg-neutral-100 outline-none rounded-l-lg p-2 text-zinc-800 text-sm overflow-auto scrollbar-hide"></textarea>

        <button onClick={sendMessage} type="submit" className={`outline-none w-8 h-8 rounded-full flex items-center ${inputState ? "bg-zinc-500 " : "bg-zinc-900 "}`} >
          <FaPaperPlane className="text-md text-zinc-200 ml-1.5" />
        </button>
      </form>
    </div>
  )
}
