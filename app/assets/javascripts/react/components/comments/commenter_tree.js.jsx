var CommenterTree = React.createClass({
  saveComment: function(id, body, cb) {
    this.props.saveComment(id, body, cb);
  },
  render: function() {
    var comments = this.props.comments.map(function(comment) {
      return (
        <CommenterTreeComment 
          comment={ comment } 
          saveComment={ this.saveComment }
          key={ "comment-" + comment.id } 
        />
      )
    }.bind(this));
    return (
      <div>
        <h1>Comments</h1>
        { comments }
      </div>
    )
  }
});
