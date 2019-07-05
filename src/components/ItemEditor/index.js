import React from "react";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Statistic from "../Statistic";
import { HotKeys } from "react-hotkeys";
import cookieStorage from 'js-cookie';

export default class ItemEditorIndex extends React.Component {
  constructor(props) {
    super(props);
    if (!decodeURI(window.location.pathname.split("/")[1])) {
      window.location.href = window.location.origin + "/Readme";
    }
    const title = decodeURI(window.location.pathname.split("/")[1]);
    this.state = {
      title: title,
      content: localStorage.getItem(title)
    };
    this.contentRef = React.createRef();
    this.titleRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.titleRef.current);
    this.titleRef.current.focus();
    console.log('originMethod', cookieStorage.get('originMethod'));
    console.log('cleanUpCookies', cookieStorage.set('originMethod', null));
  }

  handleContainerKeypress = (e) => {
    console.log('onKeyUp', e.key);
    if (e.key === 's') {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  handleChange = name => (e) => {
    this.setState({
      [name]: e.target.value
      // return {
      //   ...state,
      //   [name]: e.target.value
      // }
    });
    console.log('handleTitleChange', e.target.value);
  }

  handleTitleBlur = () => {
    // this.handleArticleSave();
  }

  handleContentChange = (e) => {
    this.setState({content: e.target.value});
  }

  handleContentKeyUp = (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
      this.handleItemUpdate();
    }
  }

  handleItemUpdate = () => {
    localStorage.setItem(this.state.title, this.state.content);
    window.location.href = window.location.origin + "/" + this.state.title;
    cookieStorage.set('originMethod', 'handleItemUpdate');
  }

  handleTitleKeyUp = (e) => {
    console.log(e, e.key);
    const code = e.keyCode || e.which;
    if (e.key === "Enter") {
      console.log('focus');
      this.contentRef.current.focus();
      localStorage.setItem(this.state.title, this.state.content);
      this.handleItemUpdate();
      console.log(this.contentRef.current);
      console.log(this.contentRef.current.querySelector("textarea").focus());
    }
  }

  handleItemUpdateByHotKey = (e) => {
    e.preventDefault();
    this.handleItemUpdate();
    console.log('handleItemUpdate');
  }

  render() {
    const keyMap = {
      SAVE_UPDATE: ["command+s", "ctrl+s"],
    };

    const handlers = {
      SAVE_UPDATE: this.handleItemUpdateByHotKey
    };

    return (
      <HotKeys keyMap={keyMap} handlers={handlers}>
        <Container maxWidth="md" onKeyPress={this.handleContainerKeypress}>
          <h1>
            <TextField
              ref={this.titleRef}
              id="title"
              name="title"
              value={this.state.title}
              onKeyUp={this.handleTitleKeyUp}
              onBlur={this.handleTitleBlur}
              onChange={this.handleChange('title')}
            />
          </h1>
          <TextField
            ref={this.contentRef}
            id="content"
            name="content"
            value={this.state.content}
            onChange={this.handleContentChange}
            onKeyUp={this.handleContentKeyUp}
            multiline
            margin="normal"
            fullWidth
            placeholder="Content Here"
            helperText="Content saved 1 mins ago"
          />
          <Button
            variant="outlined"
            onClick={this.handleItemUpdate}
            style={{float: "right"}}
          >Save</Button>
          {/* <Button
            variant="outlined"
            onClick={() => {alert('Content Published (demo)')}}
            style={{float: "right"}}
          >Publish</Button> */}
          <Statistic />
        </Container>
      </HotKeys>
    );
  }
}
