var OpinionIndex = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  render: function() {
    var self = this;
    var opinionRows = this.props.issue.opinions.map(function(row) {
      if (row.statement !== null) {
        return (
          <div key={row.id} data-component="opinion_preview">
            <h1>
              <span className={"verdict " + (row.agree ? "yes" : "no") }>{ row.agree ? "YES" : "NO" }</span> 
              @{row.handle}
            </h1>
            <p>{row.statement}</p>
            <footer>
              <ul>
                <li>
                  <a href={ this.props.issue.id + "/opinions/" + row.id } >
                    Add a comment
                  </a>
                </li>
                <li>
                  <a href={ this.props.issue.id + "/opinions/" + row.id } >
                    { row.comments + " comments" }
                  </a>
                </li>
                <li>
                  <a href={ this.props.issue.id + "/opinions/" + row.id } >
                    { row.created_at }
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        )
      }
    }, this)
    return (
      <div data-component="opinion column">
        { opinionRows }
      </div>
    )
  }
})
