var IssueTable = React.createClass({
  getInitialState: function() {
    return {
      issues: [
        {
          id: 0,
          name: "",
          created_at: ""
        }
      ]
    }
  },
  componentDidMount: function() {
  },
  render: function() {
    return (
      <IssueIndex issues={this.state.issues} />
    )
  }
})
