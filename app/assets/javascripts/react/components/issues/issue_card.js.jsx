var IssueCard = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  componentDidMount: function() {
    // $YN.buddySystem(k$.$$('[data-component="issue"] h1'))
  },
  getInitialState: function() {
    return {
      showRedSheet: false,
      agree: undefined
    }
  },
  openRedSheet: function(agree, newPage) {
    var issue = this.props.issue
    $YN.mixpanel("Pressed Vote Button", {
      issue: issue
    }, function() {
      if (newPage) {
        var url = "/issues/" + issue.id + "/opinions/new#" + ( agree ? "yes" : "no" );
        location.href = url;
      }
      else {
        var state = this.state;
        state.showRedSheet = true;
        state.agree = agree;
        this.setState(state);
        window.scrollTo(0, 0);
      }
    }.bind(this));
  },
  updateAgree: function(agree) {
    var state = this.state;
    state.agree = agree;
    this.setState(state);
  },
  render: function() {
    var issue = this.props.issue,
      score = issue.score,
      votes = issue.total_votes,
      response = "?",
      people_say = function(score) { return score === 1 ? "person says" : "people say"; },
      yes_statement = issue.yes + " " + people_say(issue.yes) + " yes.",
      no_statement = issue.no + " " + people_say(issue.no) + " no.",
      voteAction,
      authLink = (k$.$('.authentication a') || {href: ''}).href,
      style = issue.image ? { backgroundImage: 'url(' + issue.image + ')' } : {},
      statement = votes === 0 ? 'Be the first to vote!' :
        (issue.yes === issue.no ? "It's a tie!" :
           (issue.yes > issue.no ? yes_statement : no_statement)
        );

    if (issue.yes === issue.no && issue.yes + issue.no !== 0) {
      response = "TIE";
    }
    if (issue.yes > issue.no) { response = "YES" }
    if (issue.yes < issue.no) { response = "NO" }

    if (issue.user_can_vote) {
      voteAction = [
        <div
          key={ "a" + issue.id }
          className="cta hide-logged-out hide-mobile"
          href="#"
          onClick={ this.openRedSheet.bind(null, true) }
        >
          <Icon icon="thumbs-up" />
        </div>,
        <a
          key={ "d" + issue.id }
          className="cta hide-logged-out show-mobile"
          onClick={ this.openRedSheet.bind(null, true, true) }
        >
          <Icon icon="thumbs-up" />
        </a>,
        <span key={ "b" + issue.id } className="hide-logged-out">&nbsp;</span>,
        <div
          key={ "c" + issue.id }
          className="cta hide-logged-out hide-mobile"
          href="#"
          onClick={ this.openRedSheet.bind(null, false) }
        >
          <Icon icon="thumbs-down" />
        </div>,
        <a
          key={ "e" + issue.id }
          className="cta hide-logged-out show-mobile"
          onClick={ this.openRedSheet.bind(null, false, true) }
        >
          <Icon icon="thumbs-down" />
        </a>
      ]
    }
    else {
      voteAction = (
        <p key={ "d" + issue.id } className="hide-logged-out">{ "Thanks for voting!" }</p>
      )
    }

    return (
      <div>
        <RedSheet
          displayLink={this.linkState('showRedSheet')}
          agree={this.state.agree}
          issue={this.props.issue}
          key={this.props.issue.id}
          getData={this.props.getData}
          updateAgree={this.updateAgree}
        >
        </RedSheet>
        <section data-component="issue">
          <a href={ "/issues/" + issue.slug }>
            <header style={ style }>
              <Verdict
                  score={ score }
                  votes={ votes }
                  response={ response }
                  className="top"
                  key="1"
                />
            </header>
          </a>
          <main>
            <h1>
              <a href={"/issues/" + issue.slug}>{issue.name}</a>
            </h1>
            <p>{statement}</p>
          </main>
          <footer>
            <a href={authLink} className="sign-in hide-logged-in">{ "Sign in to vote" }</a>
            { voteAction }
          </footer>
        </section>
      </div>
    )
  }
})
