var CommenterTree = React.createClass({
  render: function() {
    var comments = this.props.comments.map(function(comment) {
      return (
        <CommenterTreeComment comment={ comment } key={ "comment-" + comment.id } />
      )
    });
    return (
      <div>
        { comments }
      </div>
    )
  }
});
