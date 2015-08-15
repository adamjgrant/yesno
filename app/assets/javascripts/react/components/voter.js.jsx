var Voter = React.createClass({
  signInWithTwitter: function() {
    k$.status({
      text: "Please sign in with Twitter to vote.",
      type: "status-yellow"
    })
  },
  score: 0,
  upvote: function(e) {
    this.score = 1;
    this.setData()
  },
  downvote: function(e) {
    this.score = -1;
    this.setData()
  },
  setData: function() {
    k$.status({
      text: "Submitting your vote", // TODO Dynamic error message
      type: "status-blue"
    });

    var data = "score=" + this.score;
    var cb = function() {
      k$.status({
        text: (this.score > 0 ? "Up" : "Down") + "voted!",
        type: "status-green"
      });
      this.props.refresh();
    }.bind(this);
    var url = $YN.constructPath(this.props.endpoint, this.props.endpointData);
    $YN.put(url, data, cb);
  },
  render: function() {
    var upButton = new Array
    var downButton = new Array
    if (this.props.editable) {
      upButton.push(
        <div key={"ubd1-" + this.props.keyId}>
          <button className="hide-logged-in up" key={"ub1-" + this.props.keyId} onClick={this.signInWithTwitter}></button>
          <button className="hide-logged-out up" key={"ub2-" + this.props.keyId} onClick={this.upvote}></button>
        </div>
      )
      downButton.push(
        <div key={"dbd1-" + this.props.keyId}>
          <button className="hide-logged-in down" key={"db1-" + this.props.keyId} onClick={this.signInWithTwitter}></button>
          <button className="hide-logged-out down" key={"db2-" + this.props.keyId} onClick={this.downvote}></button>
        </div>
      )
    }

    return (
      <figure data-component="voter" key={ "voter-" + this.props.keyId }>
        { this.props.disableUp ? null: upButton }
        <h1>{this.props.score}</h1>
        { this.props.disableDown ? null : downButton }
      </figure>
    )
  }
});
