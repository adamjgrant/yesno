var IssueSingle = React.createClass({
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
      }
    }
  },
  componentDidMount: function() {
    this.getData(function() {
      $YN.mixpanel("Page visited", {
        page: "Issue page – " + this.state.issue.name
      });
    }.bind(this));
  },
  getData: function(cb) {
    var self = this,
      state = this.state;
    $YN.get('/issues/' + k$.$('[data-issue]').dataset.issue + '.json', function(data) {
      state.issue = data.issue;
      self.setState(state);
      if (cb) {
        cb();
      }
    });
  },
  render: function() {
    return (
      <div className="row">
        <div data-component="breadcrumbs">
          <a href="/">&laquo; All issues</a>
        </div>

        <IssueCard issue={this.state.issue} getData={this.getData} />
        <OpinionTable issue={this.state.issue} getData={this.getData} />
      </div>
    )
  }
})
