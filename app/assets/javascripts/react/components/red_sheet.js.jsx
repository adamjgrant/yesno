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
    agree = e.target.value.toLowerCase() == "true" ? true : false;
    this.props.updateAgree(agree);
  },
  saveOpinion: function() {
    var self = this;

    var data = "opinion[statement]=" + this.state.response.statement +
      "&opinion[agree]=" + this.props.agree;

    k$.status({ text: "Saving..." })

    $YN.post('/issues/' + this.props.issue.id + '/opinions', data, function() {
      self.props.getData();
      k$.status({ text: "Saved", type: "status-green" })
      self.close();

      $YN.mixpanel("Expressed", {
        interaction: "User voted"
      });
      $YN.mixpanel("Voted" {
        vote: this.props.response.agree,
        issue: this.props.issue.name
      });
      if (this.state.response.statement) {
        $YN.mixpanel("Voted with statement" {
          vote: this.props.response.statement,
          issue: this.props.issue.name
        });
      }
    });
  },
  componentDidMount: function() {
    var state = this.state;
    state.response.agree = this.props.agree;
    this.setState(state);
  },
  render: function() {
    return (
      <div data-component="red sheet" className={this.props.displayLink.value ? "show" : ""}>
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
