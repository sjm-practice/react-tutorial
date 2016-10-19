class CommentFormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      author: "",
      text: "",
    };
  }

  handleAuthorChange(e) {
    this.setState({
      author: e.target.value,
    });
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <CommentForm
        onAuthorChange={(e) => this.handleAuthorChange(e)}
        onTextChange={(e) => this.handleTextChange(e)}
        author={this.state.author}
        text={this.state.text}
      />
    );
  }
}