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
          score: 0
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
  },
  render: function() {
    var issueRows = this.state.issues.map(function(row) {
      return (
        <IssueRow issue={row} />
      )
    })
    return (
      <div data-block="issues">
        { issueRows }
      </div>
    )
  }
})
