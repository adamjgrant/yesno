var IssueIndex = React.createClass({
  render: function() {
    var issueRows = this.props.issues.map(function(row) {
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
