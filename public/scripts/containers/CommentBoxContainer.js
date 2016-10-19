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
    $.ajax({
      url: this.props.dataApiUrl,
      dataType: "json",
      type: "POST",
      data: comment,
      success: function (data) {
        this.setState({ data });
      }.bind(this),
      error: function (xhr, status, err) {
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
