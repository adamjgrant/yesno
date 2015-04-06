var IssueIndex = React.createClass({
  getInitialState: function() {
    return {
      issues: [
        {
          id: 0,
          name: "",
          created_at: ""
        }
      ]
    }
  },
  componentDidMount: function() {
  },
  render: function() {
    var issueRows = this.state.issues.map(function(row) {
      return (
        <IssueRow key={row.id} />
      )
    })
    return (
      <div className="issue-row">
        { issueRows }
      </div>
    )
  }
})
