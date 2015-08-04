var OpinionIndex = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {
      showRedSheet: false,
    }
  },
  openRedSheet: function() {
    this.setState({showRedSheet: true});
  },
  render: function() {
    var self = this;
    var rows = this.props.issue.opinions.filter(function(row) {
       // TODO: Filter out the yeses and nos
      return row.agree === !!self.props.agree;
    });
    var opinionRows = rows.map(function(row) {
      return (
        <div key={row.id} data-component="opinion preview">
          <p>{row.statement}</p>
        </div>
      )
    })
    return (
      <div data-component="opinion column">
        <RedSheet 
          displayLink={this.linkState('showRedSheet')} 
          issue={this.props.issue}
          key="opinion"
        >
        </RedSheet>
        <h1>{this.props.title}</h1>
        <p>
          <a href="#" onClick={this.openRedSheet}>Add your opinion</a>
        </p>
        { opinionRows }
      </div>
    )
  }
})
