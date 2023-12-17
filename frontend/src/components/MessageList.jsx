import MessageItem from "./MessageItem";

const MessageList = ({ messages }) => {
  // console.log(messages);
  return (
    <div className="border border-solid border-black-400 p-6 shadow-lg">
      {messages.map((msg) => (
        <MessageItem text={msg.message} key={msg._id} />
      ))}
    </div>
  );
};
export default MessageList;
