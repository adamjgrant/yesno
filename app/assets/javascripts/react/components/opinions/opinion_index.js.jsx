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
    var opinionRows = this.props.opinions.map(function(row) {
      return (
        <div key={row.id} data-component="opinion preview">
          <h1>{row.gist}</h1>
          <p>{row.statement}</p>
        </div>
      )
    })
    return (
      <div data-component="opinion column">
        <RedSheet displayLink={this.linkState('showRedSheet')} issue={this.props.issue}>
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
