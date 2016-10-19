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

  handleSubmit(e) {
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.author.trim();

    if (!author || !text) {
      return;
    }

    // TODO: send request to server
    this.setState({
      author: "",
      text: "",
    });
    console.log("submit handled!");
  }

  render() {
    return (
      <CommentForm
        handleAuthorChange={(e) => this.handleAuthorChange(e)}
        handleTextChange={(e) => this.handleTextChange(e)}
        handleSubmit={(e) => this.handleSubmit(e)}
        author={this.state.author}
        text={this.state.text}
      />
    );
  }
}