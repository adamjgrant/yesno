var RedSheet = React.createClass({
  getInitialState: function() {
    return {
      voted: false
    }
  },
  close: function() {
    this.props.displayLink.requestChange(false);
  },
  open: function() {
    this.props.displayLink.requestChange(true);
  },
  setVoted: function() {
    this.setState({ voted: true });
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
        <input 
          type="submit" 
          className={ this.state.voted ? '' : 'hideUntilVoted' }
        />
        <textarea 
          placeholder="Why do you believe this?"
          className={ this.state.voted ? '' : 'hideUntilVoted' }
        ></textarea>
      </div>
    )
  }
})
