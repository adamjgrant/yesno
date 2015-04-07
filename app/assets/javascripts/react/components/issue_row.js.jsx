var IssueRow = React.createClass({
  render: function() {
    return (
      <article data-component="issue">
        <h1>
          <a href={"/issues/" + this.props.issue.id}>{this.props.issue.name}</a>
        </h1>
        <h2>{this.props.issue.description}</h2>
      </article>
    )
  }
})
