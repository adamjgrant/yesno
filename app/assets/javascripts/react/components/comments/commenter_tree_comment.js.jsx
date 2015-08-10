var CommenterTreeComment = React.createClass({
  getInitialState: function() {
    return({
      modalVisibility: { display: "none" }
    });
  },
  showModal: function(e) {
    e.stopPropagation();
    var state = this.state;
    state.modalVisibility = {
      display: "block"
    };
    this.setState(state);
  },
  saveComment: function(id, body) {
    this.props.saveComment(this.props.comment.id, body, function() {
      this.hideModal();
    }.bind(this));
  },
  hideModal: function() {
    var state = this.state;
    state.modalVisibility = {
      display: "none"
    };
    this.setState(state);
  },
  componentDidMount: function() {
    document.body.addEventListener('click', function() {
      this.hideModal();
    }.bind(this));
  },
  render: function() {
    return (
      <li data-component="comment">
        <div data-component="modal" className={"modal-" + this.props.comment.id } style={ this.state.modalVisibility } onClick={ this.showModal }>
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
        <ul data-block="comments">
          { this.props.children }
        </ul>
      </li>
    )
  }
});
