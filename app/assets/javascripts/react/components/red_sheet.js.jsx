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
  getData: function() {
    this.props.getData();
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
  updateAgree: function(e) {
    var state = this.state;
    state.response.agree = e.target.value.toLowerCase() == "true" ? true : false;
    this.setState(state);
  },
  updateStatement: function(e) {
    var state = this.state;
    state.response.statement = e.target.value;
    this.setTalked();
    this.setState(state);
  },
  saveOpinion: function() {
    var self = this;

    if (!this.state.voted) {
      return k$.status({
        text: "Please vote",
        status: "status-red"
      });
    };
    var data = "opinion[statement]=" + this.state.response.statement +
      "&opinion[agree]=" + this.state.response.agree;

    k$.status({ text: "Saving..." })
    $YN.post('/issues/' + this.props.issue.id + '/opinions', data, function() {
      this.props.getData();
      k$.status({ text: "Saved", type: "status-green" })
      self.close();
    });
  },
  render: function() {
    return (
      <div data-component="red sheet" className={this.props.displayLink.value ? "show" : ""}>
        <button className={(this.state.voted ? 'hideAfterVoted' : '') + " close"} onClick={this.close}>&times;</button>
        <h1>{this.props.issue.name}</h1>
        <label>
          <input type="radio" name="opinion" onClick={this.setVoted} value="true" onChange={this.updateAgree} />
          Yes
        </label>
        <label>
          <input type="radio" name="opinion" onClick={this.setVoted} value="false" onChange={this.updateAgree} />
          No
        </label>
        <textarea 
          placeholder="Why do you believe this?"
          className={ this.state.voted ? '' : 'hideUntilVoted' }
          onChange={ this.updateStatement }
          value={ this.state.response.statement }
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
