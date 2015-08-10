var CommenterTree = React.createClass({
  saveComment: function(id, body, cb) {
    this.props.saveComment(id, body, cb);
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
        >
        </CommenterTreeComment>
      )
    };
    var comments = this.props.comments.map(commentUL.bind(this));
    return (
      <div>
        <h1>Comments</h1>
        <ul data-block="comments">
          { comments }
        </ul>
      </div>
    )
  }
});
