var CommenterTree = React.createClass({
  var comments = this.props.comments.map(function(comment) {
    return (
      <CommenterTreeComment comment={ comment } key={ "comment-" + comment.id } />
    )
  }.bind(this));
  render: function() {
    return (
      { comments }
    )
  }
});
