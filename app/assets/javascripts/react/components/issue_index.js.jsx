var IssueIndex = React.createClass({
  getInitialState: function() {
    return {
      issues: [
        {
          id: 0,
          name: "Loading...",
          description: "",
          created_at: ""
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
        console.log(JSON.parse(this.response));
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
        <IssueRow key={row.id} issue={row} />
      )
    })
    return (
      <div className="issue-row">
        { issueRows }
      </div>
    )
  }
})
