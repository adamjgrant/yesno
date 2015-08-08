var CommenterTreeComment = React.createClass({
  getInitialState: function() {
    return({
      modalVisibility: { display: "none" }
    });
  },
  showModal: function(e) {
    var state = this.state;
    state.modalVisibility = {
      display: "block"
    };
    this.setState(state);
    e.stopPropagation();
  },
  saveComment: function(id, body) {
    this.props.reply(this.props.comment.id);
  },
  componentDidMount: function() {
    // k$.modal('.modal-' + this.props.comment.id);
  },
  render: function() {
    return (
      <div data-component="comment">
        <div data-component="modal" className={"modal-" + this.props.comment.id } style={ this.state.modalVisibility }>
          <CommenterComposer 
            comment={ this.props.comment }
            saveComment={ this.saveComment }
          />
        </div>
        <p>{ this.props.comment.body }</p>
        <footer>
          <p>
            <a href="#" onClick={ this.showModal }>
              Reply
            </a>
          </p>
        </footer>
      </div>
    )
  }
});
