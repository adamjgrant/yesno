var OpinionIndex = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  refresh: function() {
    this.props.getData();
  },
  render: function() {
    var self = this;
    var opinionRows = this.props.issue.opinions.map(function(row) {
      if (row.statement !== "null") {
        return (
          <div key={row.id} data-component="opinion">
            <article>
              <Voter 
                endpoint="/issues/:issue_id/opinions/:opinion_id"
                endpointData={ [this.props.issue.id, row.id] }
                score={ row.score }
                editable={ true }
                refresh={ this.refresh }
                keyId={row.id}
              />
              <main>
                <p>
                  <a href={ this.props.issue.slug + "/opinions/" + row.slug } >
                    <span className={"verdict " + (row.agree ? "yes" : "no") }>{ row.agree ? "YES" : "NO" }</span>
                    {row.statement}
                  </a>
                </p>
                <footer>
                  <img src={ row.avatar } />
                  <span>{"@" + row.handle}</span>
                </footer>
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
              </main>
            </article>
          </div>
        )
      }
    }, this)
    return (
      <div data-component="opinion_column">
        { opinionRows }
        { opinionRows.length ? '' : <p>No opinions yet</p> }
      </div>
    )
  }
})
