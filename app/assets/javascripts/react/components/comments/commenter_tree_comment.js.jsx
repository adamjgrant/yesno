var CommenterTreeComment = React.createClass({
  reply: function(id) {
    return this.props.reply(id);
  },
  render: function() {
    return (
      <div data-component="comment">
        <p>{ this.props.comment.body }</p>
        <footer>
          <p>
            <a href="#" onClick={ this.reply.bind(null, this.props.comment.id) }>
              Reply
            </a>
          </p>
        </footer>
      </div>
    )
  }
});
