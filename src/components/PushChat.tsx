'use client'
import dynamic from 'next/dynamic';
import { ChatUIProvider, darkChatTheme } from "@pushprotocol/uiweb";

const ChatView = dynamic(() => import('@pushprotocol/uiweb').then(mod => mod.ChatView), { ssr: false });

export const PushChat = () => {
  return (
    <ChatUIProvider theme={darkChatTheme}>
      <ChatView
        chatId="139187b021aeaf9b743329558e672a588e2c9186bf955c9a10787bc6555d8ea2"
        limit={10}
        isConnected={true}
        
      />
    </ChatUIProvider>
  );
}
