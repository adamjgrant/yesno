var IssueIndex = React.createClass({
  getInitialState: function() {
    return {
      issues: [
        {
          id: 0,
          name: "Loading...",
          description: "",
          image: "",
          created_at: "",
          victor_score: 0,
          score: 0,
          yes: 0,
          no: 0,
          top_yes: null,
          top_no: null
        }
      ]
    }
  },
  getData: function() {
    var self = this;
    var req = new XMLHttpRequest();
    req.open('get', this.props.url, true);
    req.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        self.setState({issues: JSON.parse(this.response).issues})
      }
    }
    req.send();
  },
  componentDidMount: function() {
    this.getData()
    $YN.mixpanel("Page visited", {
      page: "Issue index"
    })
  },
  render: function() {
    var self = this;
    var issueCards = this.state.issues.map(function(row) {
      return (
        <IssueCard issue={row} key={row.id} getData={this.getData} />
      )
    }, this)
    return (
      <div data-block="issues">
        { issueCards }
      </div>
    )
  }
})
