const commentRawMarkup = (markupText) => {
  const md = new Remarkable();
  const rawMarkup = md.render(markupText);

  return { __html: rawMarkup };
};

const Comment = (props) => {
  return (
    <div className="comment">
      <h2 className="commentAuthor">{props.author}</h2>
      <span dangerouslySetInnerHTML={commentRawMarkup(props.children.toString())} />
    </div>
  );
};
