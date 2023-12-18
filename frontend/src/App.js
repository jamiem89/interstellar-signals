import { useState, useEffect } from 'react';

import NewMessage from './components/NewMessage';
import MessageList from './components/MessageList';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {

      const response = await fetch(`${process.env.REACT_APP_API}`);
      const json = await response.json();

      await setMessages(json);
    }

    fetchMessages();
  }, [])

  return (
    <div className="grid md:grid-cols-12 gap-6 max-w-[800px] mx-auto">
      <header className="md:col-span-10 md:col-start-2 mb-6 md:mb-10 border-b border-solid border-black-300 py-5">
        <h1>Interstellar signals</h1>
      </header>
      <main className="md:col-span-10 md:col-start-2 md:grid md:grid-cols-2 md:gap-6 md:items-start">
        <NewMessage />
        {messages && <MessageList messages={messages} />}
      </main>
    </div>
  );
}

export default App;
