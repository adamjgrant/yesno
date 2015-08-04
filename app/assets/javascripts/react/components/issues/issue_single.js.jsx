var IssueSingle = React.createClass({
  getInitialState: function() {
    return {
      issue: {
        id: 0,
        name: "Loading...",
        description: "",
        created_at: "",
        victor_score: 0,
        score: 0,
        opinions: []
      }
    }
  },
  componentDidMount: function() {
    this.getData();
  },
  getData: function() {
    // TODO: Serialize for a single request.
    var self = this,
      state = this.state;
    $YN.get('/issues/' + k$.$('[data-issue]').dataset.issue + '.json', function(data) {
      // TODO: "Unexpected token u" error here.
      state.issue = data.issue;
      self.setState(state);
    });
  },
  render: function() {
    return (
      <div>
        <OpinionTable issue={this.state.issue} />
      </div>
    )
  }
})
