const CommentForm = (props) => {
  return (
    <form className="commentForm">
      <input
        type="text"
        placeholder="Your Name"
        onChange={props.onAuthorChange}
        value={props.author}
      />
      <input
        type="text"
        placeholder="say something..."
        onChange={props.onTextChange}
        value={props.text}
      />
      <input type="submit" value="post" />
    </form>
  );
};

CommentForm.propTypes = {
  onAuthorChange: React.PropTypes.func.isRequired,
  onTextChange: React.PropTypes.func.isRequired,
  author: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
};