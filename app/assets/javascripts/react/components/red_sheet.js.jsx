var RedSheet = React.createClass({
  getInitialState: function() {
    return {
      voted: false,
      talked: false,
      response: {
        statement: null,
        agree: false
      }
    }
  },
  close: function() {
    this.props.displayLink.requestChange(false);
  },
  open: function() {
    this.props.displayLink.requestChange(true);
  },
  setVoted: function() {
    var state = this.state;
    state.voted = true;
    this.setState(state, function() {
      React.findDOMNode(this.refs.talker).focus();
    });
  },
  setTalked: function() {
    var state = this.state;
    state.talked = true;
    this.setState(state);
  },
  saveOpinion: function() {
    if (!this.state.voted) {
      return k$.status({
        text: "Please vote",
        status: "status-red"
      });
    };
    var data = "opinion[statement]=" + this.state.response.statement +
      "&opinion[agree]=" + this.state.response.agree;
    $YN.post('/issues/' + this.props.issue.id + '/opinions', data);
  },
  render: function() {
    return (
      <div data-component="red sheet" className={this.props.displayLink.value ? "show" : ""}>
        <button className={(this.state.voted ? 'hideAfterVoted' : '') + " close"} onClick={this.close}>&times;</button>
        <h1>{this.props.issue.name}</h1>
        <label>
          <input type="radio" name="opinion" value="yes" onClick={this.setVoted} />
          Yes
        </label>
        <label>
          <input type="radio" name="opinion" value="no" onClick={this.setVoted} />
          No
        </label>
        <textarea 
          placeholder="Why do you believe this?"
          className={ this.state.voted ? '' : 'hideUntilVoted' }
          onChange={ this.setTalked }
          ref="talker"
        ></textarea>
        <input 
          type="submit" 
          className={ this.state.voted ? '' : 'hideUntilVoted' }
          onClick={ this.saveOpinion }
          value="Save"
        />
      </div>
    )
  }
})
