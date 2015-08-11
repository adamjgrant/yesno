var OpinionIndex = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  refresh: function() {
    this.props.getData();
  },
  render: function() {
    var self = this;
    var opinionRows = this.props.issue.opinions.map(function(row) {
      if (row.statement !== null) {
        return (
          <div key={row.id} data-component="opinion_preview">
            <Voter 
              endpoint="/issues/:issue_id/opinions/:opinion_id"
              endpointData={ [this.props.issue.id, row.id] }
              score={ row.score }
              editable={ true }
              refresh={ this.refresh }
              key={"voter-" + row.id}
            />
            <article>
              <h1>
                <span className={"verdict " + (row.agree ? "yes" : "no") }>{ row.agree ? "YES" : "NO" }</span> 
                @{row.handle}
              </h1>
              <p>{row.statement}</p>
              <footer>
                <ul>
                  <li>
                    <a href={ this.props.issue.slug + "/opinions/" + row.slug } >
                      Add a comment
                    </a>
                  </li>
                  <li>
                    <a href={ this.props.issue.slug + "/opinions/" + row.slug } >
                      { row.comments + " comments" }
                    </a>
                  </li>
                  <li>
                    <a href={ this.props.issue.slug + "/opinions/" + row.slug } >
                      { row.created_at }
                    </a>
                  </li>
                </ul>
              </footer>
            </article>
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
