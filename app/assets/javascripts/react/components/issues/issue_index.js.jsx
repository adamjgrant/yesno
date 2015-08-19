var IssueIndex = React.createClass({
  lsKey: "issues",
  getInitialState: function() {
    return {
      issues: [
        {
          id: 0,
          name: "Loading...",
          description: "",
          image: "",
          created_at: "",
          victor_score: 0,
          score: 0,
          yes: 0,
          no: 0,
          top_yes: null,
          top_no: null
        }
      ]
    }
  },
  getData: function() {
    $YN.get(this.props.url, function(response) {
        var state = this.state;
        state.issues = response.issues;
        this.setState(state);
      }.bind(this), this.lsKey
    );
  },
  componentDidMount: function() {
    cachedData = $YN.lsGet(this.lsKey);
    if (cachedData) { this.setState(cachedData); }
    this.getData();
    $YN.mixpanel("Page visited", {
      page: "Issue index"
    })
  },
  render: function() {
    var self = this;
    var issueCards = this.state.issues.map(function(row) {
      return (
        <IssueRow issue={ row } getData={ this.getData } key={ row.id } />
      )
    }, this)
    return (
      <div data-block="issues">
        { issueCards }
      </div>
    )
  }
})
