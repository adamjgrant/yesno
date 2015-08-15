var Commenter = React.createClass({
  getData: function() {
    var url = "/issues/" + this.issueId + "/opinions/" + this.opinionId + "/comments.json";

    $YN.get(url, function(data) {
      var state = this.state;
      state.comments = data.comments
      this.setState(state);
    }.bind(this));
  },

  issueId: k$.$('[data-issue-id]') ? k$.$('[data-issue-id]').dataset.issueId : null,
  opinionId: k$.$('[data-opinion-id]') ? k$.$('[data-opinion-id]').dataset.opinionId : null,

  getInitialState: function() {
    return {
      comments: []
    }
  },

  setData: function(commentId, opinionId, body, cb) {
    var url, data;
    data = "comment[body]=" + body + "&comment[opinion_id]=" + opinionId;

    if (commentId) {
      url = "/comments/create/" + commentId
    }
    else {
      url = "/issues/" + this.issueId + "/opinions/" + this.opinionId + "/comments"
    }

    k$.status({
      text: "Adding your comment...",
      type: "status-yellow"
    });

    $YN.post(url, data, function(response) {
      k$.status({
        text: response,
        type: "status-green"
      });
      if (typeof(cb) === "function") { cb(); }
      this.getData();
    }.bind(this));
  },

  componentDidMount: function() {
    this.getData();
  },

  saveComment: function(id, opinionId, body, cb) {
    this.setData(id, opinionId, body, cb);
  },

  refresh: function() {
    this.getData();
  },

  render: function() {
    return (
      <div>
        <CommenterTree opinionId={this.opinionId} refresh={this.refresh} comments={this.state.comments} saveComment={ this.saveComment }/>
      </div>
    )
  }
});
