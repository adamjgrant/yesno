var NewsTitle = React.createClass({
  render: function() {
    var issue = this.props.issue;
    return (
      <div data-component="news_title" className={ this.props.className }>
        <h1><a href={ "/issues/" + issue.slug }>{ issue.news_title || issue.name }</a></h1>
        { issue.news_link ? <p>Read the full article at <a href={ issue.news_link }>{ issue.news_source }</a></p> : "" }
      </div>
    );
  }
});
