import "./Message.css";

function Message({ isSuccess }) {
  return (
    <>
      <h2>Message</h2>
      {isSuccess ? (
        <div className="msg">My Code runs perfectly</div>
      ) : (
        <div className="msg">My Code shows error</div>
      )}
    </>
  );
}
export default Message;
