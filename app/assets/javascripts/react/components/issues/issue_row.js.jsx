var IssueRow = React.createClass({
  render: function() {
    response = (this.props.issue.score > 0 ? "yes" : "no")
    return (
      <article data-component="issue">
        <h1>
          <a href={"/issues/" + this.props.issue.id}>{this.props.issue.name}</a>
        </h1>
        <h2>{this.props.issue.description}</h2>
        <h3>{this.props.issue.victor_score} people say <strong>{ response }</strong></h3>
      </article>
    )
  }
})
