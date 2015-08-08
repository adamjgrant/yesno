var CommenterTree = React.createClass({
  reply: function() {
    this.props.reply();
  },
  render: function() {
    var comments = this.props.comments.map(function(comment) {
      return (
        <CommenterTreeComment 
          comment={ comment } 
          key={ "comment-" + comment.id } 
          reply={ this.reply }
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
