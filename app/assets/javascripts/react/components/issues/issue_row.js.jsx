var IssueRow = React.createClass({
  render: function() {
    response = (this.props.issue.score > 0 ? "yes" : "no")
    var response = "";
    if (this.props.issue.score == 0) {
      response = "Be the first to vote!"
    }
    else {
      var people_say = (Math.abs(this.props.issue.score) > 1 ? "people say" : "person says")
      var prefix = this.props.issue.victor_score + " " + people_say
      response = prefix + " " + (this.props.issue.score > 0 ? "YES" : "NO")
    }
    return (
      <article data-component="issue">
        <h1>
          <a href={"/issues/" + this.props.issue.id}>{this.props.issue.name}</a>
        </h1>
        <h2>{this.props.issue.description}</h2>
        <h3>{ response }</h3>
      </article>
    )
  }
})
