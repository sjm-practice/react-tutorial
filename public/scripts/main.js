const commentData = [
  {id: 1, author: "Pete Hunt", text: "This is one comment."},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment."},
];

ReactDOM.render(
  <CommentBox data={commentData} />,
  document.getElementById("content")
);