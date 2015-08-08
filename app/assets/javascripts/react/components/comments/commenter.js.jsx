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

  setData: function(commentId, body) {
    var url, data;
    data = "comment[body]=" + body;
    if (commentId) {
      url = "/comments/create/" + commentId
    }
    else {
      url = "/issues/" + this.issueId + "/opinions/" + this.opinionId + "/comments"
    }
    $YN.post(url, data, function(response) {
      k$.status({
        text: response,
        type: "status-green"
      });
      this.getData();
    }.bind(this));
  },

  componentDidMount: function() {
    this.getData();
  },

  saveComment: function() {
    this.setData(id, body);
  },

  render: function() {
    return (
      <div>
        <CommenterComposer 
          issueId={this.issueId} opinionId={this.opinionId} 
          saveComment={ this.setData }
        />
        <CommenterTree comments={this.state.comments} saveComment={ this.reply }/>
      </div>
    )
  }
});
