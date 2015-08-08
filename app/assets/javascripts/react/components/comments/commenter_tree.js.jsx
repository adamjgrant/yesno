var CommenterTree = React.createClass({
  var comments = this.props.comments.map(function(comment) {
    return (
      <CommenterTreeComment comment={ comment } key={ "comment-" + comment.id } />
    )
  });
  render: function() {
    return (
      <div>
        { comments }
      </div>
    )
  }
});
