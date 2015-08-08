var CommenterTree = React.createClass({
  reply: function() {
    this.props.reply();
  },
  render: function() {
    var comments = this.props.comments.map(function(comment) {
      return (
        <CommenterTreeComment 
          comment={ comment } 
          reply={ this.reply }
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
