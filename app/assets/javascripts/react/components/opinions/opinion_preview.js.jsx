var OpinionPreview = React.createClass({
  render: function() {
    return (
      <figure data-component="opinion_preview">
        <blockquote>&ldquo;{ this.props.opinion.statement }&rdquo;</blockquote>
        <div data-component="opinion">
          { this.props.issue ? <footer><p><a href={ "/issues/" + this.props.issue.slug + "/opinions/" + this.props.opinion.id }>View comment</a></p></footer> : "" }
          <footer>
            <img src={ this.props.opinion.avatar } />
            <span>{"@" + this.props.opinion.handle }</span>
            <span className={"verdict " + (this.props.opinion.agree ? "yes" : "no")}>{ this.props.opinion.agree ? "YES" : "NO" }</span>
          </footer>
        </div>
      </figure>
    );
  }
});
