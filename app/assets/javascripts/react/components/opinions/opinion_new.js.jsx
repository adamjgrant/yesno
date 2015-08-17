var OpinionNew = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {
      showRedSheet: true,
      agree: undefined
    }
  },
  updateAgree: function(agree) {
    var state = this.state;
    state.agree = agree;
    this.setState(state);
  },
  getData: function() { },
  render: function() {
    var issue = {
      id: k$.$('[data-issue-id]').dataset.issueId,
      name: k$.$('[data-issue-name]').dataset.issueName
    };
    return (
      <RedSheet 
        displayLink={this.linkState('showRedSheet')}
        agree={this.state.agree}
        issue={issue}
        key={issue.id}
        getData={this.getData}
        updateAgree={this.updateAgree}
      />
    );
  }
});
