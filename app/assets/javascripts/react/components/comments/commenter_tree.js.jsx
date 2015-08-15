var CommenterTree = React.createClass({
  saveComment: function(id, opinion_id, body, cb) {
    this.props.saveComment(id, opinion_id, body, cb);
  },
  refresh: function() {
    this.props.refresh();
  },
  render: function() {
    var commentUL = function(comment) {
      var innerComments = <strong>None</strong>;
      if (comment.comments) {
        innerComments = comment.comments.map(commentUL.bind(this));
      }
      return (
        <CommenterTreeComment 
          comment={ comment } 
          saveComment={ this.saveComment }
          key={ "comment-" + comment.id } 
          children={ innerComments }
          opinionId={ this.props.opinionId }
          refresh={this.refresh}
        >
        </CommenterTreeComment>
      )
    };
    var comments = this.props.comments.map(commentUL.bind(this));
    return (
      <div data-block="comments">
        <h1>Comments</h1>
        <CommenterComposer 
          issueId={this.props.issueId} opinionId={this.props.opinionId} 
          saveComment={ this.saveComment }
        />
        <ul data-block="comments">
          { comments }
          { comments.length ? '' : <p>No comments yet</p> }
        </ul>
      </div>
    )
  }
});
