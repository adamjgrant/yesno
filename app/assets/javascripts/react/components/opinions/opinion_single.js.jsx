// Most of this is a dupe of issue_single.js.jsx, but it has a slightly different purpose.
// Would be good to DRY up.

var OpinionSingle = React.createClass({
  getInitialState: function() {
    return {
      issue: {
        id: 0,
        name: "Loading...",
        description: "",
        created_at: "",
        victor_score: 0,
        score: 0,
        yes: 0,
        no: 0,
        opinions: []
      }
    }
  },
  componentDidMount: function() {
    this.getData();
  },
  getData: function() {
    var self = this,
      state = this.state;
    $YN.get('/issues/' + k$.$('[data-issue-id]').dataset.issueId + '.json', function(data) {
      state.issue = data.issue;
      self.setState(state);
    });
    $YN.mixpanel("Page visited", {
      page: "Issue page – " + this.state.issue.name
    });
  },
  render: function() {
    return (
      <div>
        <IssueCard issue={this.state.issue} getData={this.getData} />
        <Commenter />
      </div>
    )
  }
});
