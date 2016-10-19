class CommentBoxContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  /**
   * for purpose of this exercise, simply polling for comments changes,
   * but could use subscriptions, websockets, frameworks, etc instead
   */
  loadCommentsFromServer() {
    $.ajax({
      url: this.props.dataApiUrl,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.dataApiUrl, status, err.toString());
      }.bind(this)
    });
  }

  handleCommentSubmit(comment) {
    /**
     * optimistically add new comment to comment list. it will be replaced by server
     * comment list once request to server is complete, and the new comment list
     * is polled.
     */
    const comments = this.state.data;
    comment.id = Date.now();   // set a temporary unique on the new comment
    let newComments = comments.concat([comment]); // note concat returns a new array, not sure if necessary
    this.setState({ data: newComments })

    $.ajax({
      url: this.props.dataApiUrl,
      dataType: "json",
      type: "POST",
      data: comment,
      success: function (data) {
        this.setState({ data });
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({ data: comments });    // restore state to comments prior to error
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
  }

  render() {
    return (
      <CommentBox
        data={this.state.data}
        onCommentSubmit={(comment) => this.handleCommentSubmit(comment)}
      />
    );
  }
}
