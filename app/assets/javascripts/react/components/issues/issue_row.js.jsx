var IssueRow = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {
      showRedSheet: false
    }
  },
  openRedSheet: function() {
    this.setState({ showRedSheet: true });
  },
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
        <RedSheet 
          displayLink={this.linkState('showRedSheet')} 
          issue={this.props.issue}
          key={this.props.issue.id}
          getData={this.props.getData}
        >
        </RedSheet>
        <div className="img" style={ style } />
        <article>
          <Verdict score={ score } response={ response } yes={ yes_statement } no={ no_statement } className="top" />
          <aside className="title">
            <h1>
              <a href={"/issues/" + issue.id}>{issue.name}</a>
            </h1>
            <p>{issue.description}</p>
            <p className="sign-in">{ "Sign in to vote" }</p>
            <a className="cta" href="#" onClick={ this.openRedSheet }>{ "Yes" }</a>&nbsp;
            <a className="cta" href="" onClick={ this.openRedSheet }>{ "No" }</a>
          </aside>
          <Verdict score={ score } response={ response } yes={ yes_statement } no={ no_statement } className="bottom" />
        </article>
      </section>
    )
  }
})
