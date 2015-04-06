var IssueRow = React.createClass({
  render: function() {
    return (
      <div data-component="issue">
        <h1>{this.props.issue.name}</h1>
        <h2>{this.props.issue.description}</h2>
      </div>
    )
  }
})
