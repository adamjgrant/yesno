var IssueIndex = React.createClass({
  getInitialState: function() {
    return {
      issues: [
        {
          id: 0,
          name: "Loading...",
          description: "",
          image: "",
          created_at: "",
          victor_score: 0,
          score: 0,
          yes: 0,
          no: 0,
          top_yes: null,
          top_no: null
        }
      ]
    }
  },
  getData: function() {
    var self = this;
    var req = new XMLHttpRequest();
    req.open('get', this.props.url, true);
    req.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        self.setState({issues: JSON.parse(this.response).issues})
      }
    }
    req.send();
  },
  componentDidMount: function() {
    this.getData()
    $YN.mixpanel("Page visited", {
      page: "Issue index"
    })
  },
  render: function() {
    var self = this;
    var issueCards = this.state.issues.map(function(row) {
      return (
        <div data-block="issue_row">
          <div className="issue_aside">
            <NewsTitle issue={ row } />
            <div data-block="opinion_previews">
              <h1>Top Opinions</h1>
              <div className="row">
                { row.top_yes ? <OpinionPreview issue={ row } opinion={ row.top_yes } /> : <p data-component="opinion_preview"><em>{ "No yes votes yet!" }</em></p> }
                { row.top_no ? <OpinionPreview issue={ row } opinion={ row.top_no } /> : <p data-component="opinion_preview"><em>{ "No no votes yet!" }</em></p> }
              </div>
            </div>
          </div>

          <div className="issue_card_container">
            <IssueCard issue={row} key={row.id} getData={this.getData} />
          </div>
        </div>
      )
    }, this)
    return (
      <div data-block="issues">
        { issueCards }
      </div>
    )
  }
})
