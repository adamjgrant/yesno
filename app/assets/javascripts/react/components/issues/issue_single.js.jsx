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
      <div data-block="issue_row">
        <div className="issue_card_container">
          <div data-component="breadcrumbs" className="show-mobile">
            <a href="/">&laquo; All issues</a>
          </div>
          <IssueCard issue={this.state.issue} getData={this.getData} />
        </div>
        <div className="issue_aside">
          <div data-component="breadcrumbs" className="hide-mobile">
            <a href="/">&laquo; All issues</a>
          </div>
          <NewsTitle issue={ this.state.issue } />
          <OpinionTable issue={this.state.issue} vote={ this.vote } getData={this.getData} />
        </div>
      </div>
    )
  }
})
