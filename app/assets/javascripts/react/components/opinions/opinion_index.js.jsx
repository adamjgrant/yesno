var OpinionIndex = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  render: function() {
    var self = this;
    var opinionRows = this.props.issue.opinions.map(function(row) {
      if (row.statement !== null) {
        return (
          <div key={row.id} data-component="opinion preview">
            <h1><span className={"verdict " + (row.agree ? "yes" : "no") }>{ row.agree ? "YES" : "NO" }</span> @{row.handle}</h1>
            <p>{row.statement}</p>
          </div>
        )
      }
    })
    return (
      <div data-component="opinion column">
        { opinionRows }
      </div>
    )
  }
})
