var OpinionIndex = React.createClass({
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
        <h1>{this.props.title}</h1>
        { opinionRows }
      </div>
    )
  }
})
