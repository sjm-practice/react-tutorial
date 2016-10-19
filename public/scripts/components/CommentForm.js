const CommentForm = (props) => {
  return (
    <form className="commentForm" onSubmit={props.handleSubmit}>
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

CommentForm.propTypes = {
  handleAuthorChange: React.PropTypes.func.isRequired,
  handleTextChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  author: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
};