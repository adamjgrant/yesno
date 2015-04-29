var Voter = React.createClass({
  signInWithTwitter: function() {
    k$.status({
      text: "Please sign in with Twitter to vote.",
      type: "status-yellow"
    })
  },
  userScore: 0,
  upvote: function(e) {
    this.userScore = 1;
    this.setData()
  },
  downvote: function(e) {
    this.userScore = -1;
    this.setData()
  },
  setData: function() {
    k$.status({
      text: "Submitting your vote", // TODO Dynamic error message
      type: "status-blue"
    });

    var vote = this.userScore;
    var self = this;
    this.props.objects = this.props.objects || this.props.object + "s";
    var url = "/" + this.props.objects + "/" + this.props.issue.id;
    var request = new XMLHttpRequest();
    request.open('PUT', url, true);
    token = k$.$('meta[name=csrf-token]').content
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    request.setRequestHeader('X-CSRF-Token', token)
    data = "score=" + vote + "&" + this.props.object + "[id]=" + this.props.issue.id;

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // var data = JSON.parse(request.responseText);
        k$.status({
          text: (self.userScore > 0 ? "Up" : "Down") + "voted!",
          type: "status-green"
        });
      } else {
        console.log(request.status)
        k$.status({
          text: "Error", // TODO Dynamic error message
          type: "status-yellow"
        });
      }
    }

    request.send(data);
  },
  render: function() {
    var upButton = new Array
    var downButton = new Array
    if (this.props.editable == "true") {
      upButton.push(
        <div>
          <button className="hide-logged-in up" onClick={this.signInWithTwitter}></button>
          <button className="hide-logged-out up" onClick={this.upvote}></button>
        </div>
      )
      downButton.push(
        <div>
          <button className="hide-logged-in down" onClick={this.signInWithTwitter}></button>
          <button className="hide-logged-out down" onClick={this.downvote}></button>
        </div>
      )
    }

    return (
      <figure data-component="voter">
        { upButton }
        <h1>{this.props.issue.score}</h1>
        { downButton }
      </figure>
    )
  }
});
