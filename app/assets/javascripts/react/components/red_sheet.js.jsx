var RedSheet = React.createClass({
  getInitialState: function() {
    return {
      talked: false,
      response: {
        statement: null
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
  setTalked: function() {
    var state = this.state;
    state.talked = true;
    this.setState(state);
  },
  updateStatement: function(e) {
    var state = this.state;
    state.response.statement = e.target.value;
    this.setTalked();
    this.setState(state);
  },
  updateAgree: function(e, agree) {
    agree = e ? (e.target.value.toLowerCase() == "true" ? true : false) : agree;
    this.props.updateAgree(agree);
  },
  saveOpinion: function() {

    var data = "opinion[statement]=" + this.state.response.statement +
      "&opinion[agree]=" + this.props.agree;

    k$.status({ text: "Saving..." })

    $YN.post('/issues/' + this.props.issue.id + '/opinions', data, function() {
      this.props.getData();
      k$.status({ text: "Saved", type: "status-green" })
      this.close();

      $YN.mixpanel("Expressed", {
        interaction: "User voted"
      });
      $YN.mixpanel("Voted", {
        vote: this.state.response.agree,
        issue: this.props.issue.name
      });
      if (this.state.response.statement) {
        $YN.mixpanel("Voted with statement", {
          vote: this.state.response.statement,
          issue: this.props.issue.name
        });
      }
      location.href = "/issues/" + this.props.issue.id;
    }.bind(this));
  },
  componentDidMount: function() {
    var state = this.state;
    if (location.hash === "#yes") { this.updateAgree(null, true); }
    if (location.hash === "#no") { this.updateAgree(null, false); }
    this.setState(state);
  },
  render: function() {
    return (
      <div data-component="red_sheet" className={this.props.displayLink.value ? "show" : ""}>
        <div className="wrapper">
          <button className="close" onClick={this.close}>&times;</button>
          <h1>{this.props.issue.name}</h1>
          <label>
            <input type="radio" name="opinion" value="true" checked={this.props.agree} onChange={this.updateAgree} />
            Yes
          </label>
          <label>
            <input type="radio" name="opinion" value="false" checked={!this.props.agree} onChange={this.updateAgree} />
            No
          </label>
          <p>Tell us why below</p>
          <textarea 
            placeholder="I believe this because..."
            onChange={ this.updateStatement }
            value={ this.state.response.statement }
            ref="talker"
          ></textarea>
          <input 
            type="submit" 
            onClick={ this.saveOpinion }
            value="Save"
          />
        </div>
      </div>
    )
  }
})
