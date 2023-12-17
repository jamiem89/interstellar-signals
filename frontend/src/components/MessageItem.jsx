const MessageItem = ({ text }) => {
  return (
    <div className="border-b border-black-400 border-solid pb-3 mb-3">
      <p className="text-xs">{text}</p>
    </div>
  );
};

export default MessageItem;
