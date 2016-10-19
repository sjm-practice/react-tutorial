const CommentForm = (props) => {
  return (
    <form className="commentForm">
      <input
        type="text"
        placeholder="Your Name"
        onChange={props.handleAuthorChange}
        value={props.author}
      />
      <input
        type="text"
        placeholder="say something..."
        onChange={props.handleTextChange}
        value={props.text}
      />
      <input type="submit" value="post" />
    </form>
  );
};
