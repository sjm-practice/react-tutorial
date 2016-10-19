const CommentBox = (props) => {
  return (
    <div className="commentBox">
      <h1>Comments</h1>
      <CommentList data={props.data} />
      <CommentFormContainer />
    </div>
  );
};
