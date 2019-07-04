import React from "react";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


export default class ArticleEditorIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Unkown",
      content: "Fusce dapibus, tellus ac cursus commodo"
    };
    this.content = React.createRef();
  }

  componentDidMount() {
    this.content.current.focus();
  }

  handleContentChange = (e) => {
    this.setState({content: e.target.value})
  }

  handleTitleKeyUp = (e) => {
    console.log(e, e.key);
    const code = e.keyCode || e.which;
    if (e.key === "Enter") {
      console.log('focus');
      this.content.current.focus();
      console.log(this.content.current);
      console.log(this.content.current.querySelector("textarea").focus());
    }
  }

  render() {
    return (
      <Container maxWidth="md">
        <h1>
          <TextField
            id="title"
            value={decodeURI(window.location.pathname.split("/")[1]) || "Untitled"}
            onKeyUp={this.handleTitleKeyUp}
          />
        </h1>
        <TextField
          ref={this.content}
          id="content"
          value={this.state.content}
          onChange={this.handleContentChange}
          multiline
          margin="normal"
          fullWidth
          placeholder="Content Here"
          helperText="Content saved 1 mins ago"
        />
        <Button
          variant="outlined"
          onClick={() => {alert('Content Published (demo)')}}
          style={{float: "right"}}
        >Publish</Button>
      </Container>
    );
  }
}
