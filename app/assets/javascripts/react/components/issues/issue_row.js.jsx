var IssueRow = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {
      showRedSheet: false,
      agree: undefined
    }
  },
  openRedSheet: function(agree) {
    var state = this.state;
    state.showRedSheet = true;
    state.agree = agree;
    this.setState(state);
    window.scrollTo(0, 0);
  },
  updateAgree: function(agree) {
    var state = this.state;
    state.agree = agree;
    this.setState(state);
  },
  render: function() {
    var issue = this.props.issue,
      score = issue.total_votes,
      response = "Be the first to vote",
      people_say = function(score) { return score === 1 ? "says" : "say"; },
      yes_statement = issue.yes + " " + people_say(issue.yes) + " yes.",
      no_statement = issue.no + " " + people_say(issue.no) + " no.",
      voteAction,
      authLink = (k$.$('.authentication a') || {href: ''}).href,
      style = issue.image ? { backgroundImage: 'url(' + issue.image + ')' } : {};

    if (issue.yes === issue.no && issue.yes + issue.no !== 0) { 
      response = "TIE";
    }
    if (issue.yes > issue.no) { response = "YES" }
    if (issue.yes < issue.no) { response = "NO" }

    if (issue.user_can_vote) {
      voteAction = [
        <button 
          key={ "a" + issue.id } 
          className="cta hide-logged-out" 
          href="#" 
          onClick={ this.openRedSheet.bind(null, true) }
        >
          { "Yes" }
        </button>,
        <span key={ "b" + issue.id } className="hide-logged-out">&nbsp;</span>,
        <button 
          key={ "c" + issue.id } 
          className="cta hide-logged-out" 
          href="" 
          onClick={ this.openRedSheet.bind(null, false) }
        >
          { "No" }
        </button>
      ]
    }
    else {
      voteAction = (
        <p key={ "d" + issue.id } className="hide-logged-out">{ "Thanks for voting!" }</p>
      )
    }

    return (
      <section data-component="issue">
        <RedSheet 
          displayLink={this.linkState('showRedSheet')} 
          agree={this.state.agree}
          issue={this.props.issue}
          key={this.props.issue.id}
          getData={this.props.getData}
          updateAgree={this.updateAgree}
        >
        </RedSheet>
        <div className="img" style={ style } />
        <article>
          <Verdict
            score={ score }
            response={ response }
            yes={ yes_statement }
            no={ no_statement }
            className="top"
            key="1"
          />
          <aside className="title">
            <h1>
              <a href={"/issues/" + issue.slug}>{issue.name}</a>
            </h1>
            <p>{issue.description}</p>
            <a href={authLink} className="sign-in hide-logged-in">{ "Sign in to vote" }</a>
            { voteAction }
          </aside>
          <Verdict
            score={ score }
            response={ response }
            yes={ yes_statement }
            no={ no_statement }
            className="bottom"
            key="2"
          />
        </article>
      </section>
    )
  }
})
