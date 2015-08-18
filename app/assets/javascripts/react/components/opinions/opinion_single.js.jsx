// Most of this is a dupe of issue_single.js.jsx, but it has a slightly different purpose.
// Would be good to DRY up.

var OpinionSingle = React.createClass({
  getInitialState: function() {
    return {
      issue: {
        id: 0,
        name: "Loading...",
        description: "",
        created_at: "",
        victor_score: 0,
        score: 0,
        yes: 0,
        no: 0,
        opinions: []
      },
      opinion: {
        id: 0,
        score: 0,
        handle: '',
        avatar: '',
        statement: '',
        agree: false,
        created_at: '',
        comments: 0,
        slug: ''
      }
    }
  },
  componentDidMount: function() {
    this.getData(function() {
      $YN.mixpanel("Page visited", {
        page: ("Opinion page – " + this.state.issue.name + " | " + this.state.opinion.statement)
      });
    }.bind(this));
  },
  getIssueData: function(cb) {
    var state = this.state;
    $YN.get('/issues/' + k$.$('[data-issue-id]').dataset.issueId + '.json', function(data) {
      state.issue = data.issue;
      this.setState(state);

      if (cb) { this.fireMixpanelEvent(cb); }
    }.bind(this));
  },
  getOpinionData: function(cb) {
    var state = this.state;
    $YN.get('/issues/' + k$.$('[data-issue-id]').dataset.issueId + '/opinions/' + k$.$('[data-opinion-id]').dataset.opinionId + '.json', function(data) {
      state.opinion = data.opinion;
      this.setState(state);

      if (cb) { this.fireMixpanelEvent(cb); }
    }.bind(this));
  },
  firings: 0,
  fireMixpanelEvent: function(cb) {
    this.firings++;
    if (this.firings > 1) {
      cb();
    }
  },
  getData: function(cb) {
    this.getIssueData(cb);
    this.getOpinionData(cb);
  },
  render: function() {
    return (
      <div className="row">
        <div data-component="breadcrumbs">
          <a href="/">&laquo; All issues</a>
          <span> / </span>
          <a href={ "/issues/" + this.state.issue.id }>{ this.state.issue.name }</a>
        </div>
        <IssueCard issue={this.state.issue} getData={this.getData} />
        <div className="opinion_column">
          <OpinionPreview opinion={ this.state.opinion } />
          <Commenter />
        </div>
      </div>
    )
  }
});
