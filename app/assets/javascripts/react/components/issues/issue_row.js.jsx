var IssueRow = React.createClass({
  render: function() {
    var issue = this.props.issue,
      score = issue.total_votes,
      response = "Be the first to vote",
      people_say = function(score) { return score === 1 ? "says" : "say"; },
      yes_statement = issue.yes + " " + people_say(issue.yes) + " yes.",
      no_statement = issue.no + " " + people_say(issue.no) + " no.",
      style = issue.image ? { backgroundImage: 'url(' + issue.image + ')' } : {};

      if (issue.yes === issue.no && issue.yes + issue.no !== 0) { 
        response = "TIE";
      }
      if (issue.yes > issue.no) { response = "YES" }
      if (issue.yes < issue.no) { response = "NO" }

    return (
      <section data-component="issue">
        <div className="img" style={ style } />
        <article>
          <aside className={ (score == 0) ? '' : response.toLowerCase() }>
            <h1 className={ (score == 0) ? 'small' : '' }>{ response }</h1>
            { score === 0 ? '' : <p>{ yes_statement }</p> }
            { score === 0 ? '' : <p>{ no_statement }</p> }
          </aside>
          <aside>
            <h1>
              <a href={"/issues/" + issue.id}>{issue.name}</a>
            </h1>
            <p>{issue.description}</p>
            <p className="sign-in">{ "Sign in to vote" }</p>
            <a className="cta" href="#">{ "Yes" }</a>&nbsp;
            <a className="cta" href="">{ "No" }</a>
          </aside>
        </article>
      </section>
    )
  }
})
