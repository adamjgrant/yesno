var Commenter = React.createClass({
  getData: function() {
    var url = "/issues/" + k$.$('[data-issue-id]').dataset.issueId + "/opinions/" + k$.$('[data-opinion-id]').dataset.opinionId + "/comments.json";

    $YN.get(url, function(data) {
      var state = this.state;
      state.comments = data.comments
      this.setState(state);
    }.bind(this));
  },
  getInitialState: function() {
    return {
      comments: []
    }
  },
  componentDidMount: function() {
    this.getData();
  },
  render: function() {
    return (
      <div>
        <CommenterComposer />
        <CommenterTree comments={this.state.comments} />
      </div>
    )
  }
});
