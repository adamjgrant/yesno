var IssueSingle = React.createClass({
  getInitialState: function() {
    return {
      issue: {
        id: 0,
        name: "Loading...",
        description: "",
        created_at: "",
        victor_score: 0,
        score: 0
      }
    }
  },
  componentDidMount: function() {
    this.getData();
  },
  getData: function() {
    var self = this;
    var req = new XMLHttpRequest();
    req.open('get', '/issues/' + k$.$('[data-issue]').dataset.issue + '.json', true); // TODO Url
    req.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        self.setState({issue: JSON.parse(this.response).issue})
      }
    }
    req.send();
  },
  render: function() {
    var response = "";
    if (this.state.score == 0) {
      response = "Be the first to vote!"
    }
    else {
      var people_say = (Math.abs(this.state.issue.score) > 1 ? "people say" : "person says")
      var prefix = this.state.issue.victor_score + " " + people_say
      response = prefix + " " + (this.state.issue.score > 0 ? "YES" : "NO")
    }
    return (
      <div>
        <h3>{ response }</h3>
        <OpinionTable />
      </div>
    )
  }
})
