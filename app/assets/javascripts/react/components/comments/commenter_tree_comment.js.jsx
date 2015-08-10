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
  saveComment: function(id, opinionId, body) {
    this.props.saveComment(this.props.comment.id, opinionId, body, function() {
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
            opinionId={ this.props.opinionId }
          />
        </div>
        <Voter 
          endpoint="/comments/:id" 
          endpointData={ [this.props.comment.id] } 
          score={ this.props.comment.score } 
          editable={ true }
          disableDown={ true }
        />
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
