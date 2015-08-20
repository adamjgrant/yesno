var IssueRow = React.createClass({
  getData: function() {
    this.props.getData();
  },
  render: function() {
    return (
      <div data-block="issue_row">
        <div className="issue_aside">
          <NewsTitle issue={ this.props.issue } />
          { this.props.issue.news_link ? <h2>{ this.props.issue.name }. Do you agree?</h2> : "" }
          <CTAs issue={ this.props.issue } />
          <div data-block="opinion_previews">
            <h1>Top Opinions</h1>
            <div className="row">
              { this.props.issue.top_yes ? <OpinionPreview issue={ this.props.issue } opinion={ this.props.issue.top_yes } /> : <p data-component="opinion_preview"><em>{ "No yes votes yet!" }</em></p> }
              { this.props.issue.top_no ? <OpinionPreview issue={ this.props.issue } opinion={ this.props.issue.top_no } /> : <p data-component="opinion_preview"><em>{ "No no votes yet!" }</em></p> }
            </div>
          </div>
        </div>
        <div className="issue_card_container">
          <IssueCard issue={this.props.issue} key={this.props.issue.id} getData={this.getData} />
        </div>
      </div>
    );
  }
});
