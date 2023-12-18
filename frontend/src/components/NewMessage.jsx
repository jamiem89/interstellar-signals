import { useState } from "react";

const NewMessage = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.length) {
      setError("Please include a message");
    }

    if (message.length) {
      const newMessage = { message };

      const response = await fetch(`${process.env.REACT_APP_API}`, {
        method: "POST",
        body: JSON.stringify(newMessage),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      }

      if (response.ok) {
        setMessage("");
        setError(null);
      }

      setIsLoading(false);
    }
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      {error && (
        <p className="border border-red-600 border-solid bg-red-200 p-8">
          {error}
        </p>
      )}
      <label className="">Message:</label>
      <textarea
        className="border border-solid border-black-300 mb-5"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <button
        className="inline-block p-4 bg-orange-400 text-black rounded-full w-auto"
        disabled={isLoading}
      >
        Send message
      </button>
    </form>
  );
};

export default NewMessage;
