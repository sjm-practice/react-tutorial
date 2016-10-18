const commentRawMarkup = (markupText) => {
  const md = new Remarkable();
  const rawMarkup = md.render(markupText);

  return { __html: rawMarkup };
};

/**
 * This uses a special API that intentionally makes it difficult to insert raw HTML,
 * but for remarkable we'll take advantage of this backdoor.
 *
 * Remember: by using this feature you're relying on remarkable to be secure. In this case,
 * remarkable automatically strips HTML markup and insecure links from the output.
 */
const Comment = (props) => {
  return (
    <div className="comment">
      <h2 className="commentAuthor">{props.author}</h2>
      <span dangerouslySetInnerHTML={commentRawMarkup(props.children.toString())} />
    </div>
  );
};
