import  { createContext, useContext, useState, ReactNode } from "react";

interface ChatMessage {
    message: string,
    id: number,
    userID: number,
}

interface ChatProviderProps {
    children: ReactNode
}

interface CreateContextType {
    chatMessages: ChatMessage[],
    addChatMessage: (text: string) => void
}

const ChatContext = createContext<CreateContextType>({} as CreateContextType);

export default function ChatProvider({ children }: ChatProviderProps) {
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

    const addChatMessage = (text: string) => {
        const newMassage: ChatMessage = {
            message: text,
            id: Date.now(),
            userID: 1
        }
        setChatMessages([...chatMessages, newMassage]);
    }
    return (
        <div>
            <ChatContext.Provider value={{ chatMessages, addChatMessage }}>
                {children}
            </ChatContext.Provider>
        </div>
    );
}


export function useChat() {
    const context = useContext(ChatContext);
    if (context === undefined) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
}
