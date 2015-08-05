var IssueRow = React.createClass({
  render: function() {
    var score = this.props.issue.score,
      response = (score > 0 ? "YES" : "YES"),
      people_say = function(score) { return score === 1 ? "person says" : "people say"; },
      yes_statement = this.props.issue.yes + " " + people_say(this.props.issue.yes) + " yes.",
      no_statement = this.props.issue.no + " " + people_say(this.props.issue.no) + " no.",
      style = {
        backgroundImage: 'url(' + this.props.issue.image + ')'
      };

    if (score == 0) {
      response = "Be the first to vote!";
    }

    return (
      <section data-component="issue">
        <div className="img" style={ style } />
        <article>
          <aside>
            <h1>
              <a href={"/issues/" + this.props.issue.id}>{this.props.issue.name}</a>
            </h1>
            <p>{this.props.issue.description}</p>
          </aside>
          <aside>
            <h1 className={ (score == 0) ? 'small' : '' }>{ response }</h1>
            <p>{ yes_statement }</p>
            <p>{ no_statement }</p>
          </aside>
        </article>
      </section>
    )
  }
})
