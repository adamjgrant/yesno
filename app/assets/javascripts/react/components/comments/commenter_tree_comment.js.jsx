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
      $YN.mixpanel("Expressed", {
        interaction: "User commented"
      });
      $YN.mixpanel("Commented");
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
    // Scroll to anchor link if exists
    if (location.hash) {
      var position = k$.$(location.hash).getBoundingClientRect();
      window.scrollTo(position.left, position.top);
    }
  },
  refresh: function() {
    this.props.refresh();
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
        <div className="vote-row">
          <Voter 
            endpoint="/comments/:id" 
            endpointData={ [this.props.comment.id] } 
            score={ this.props.comment.score } 
            editable={ true }
            disableDown={ true }
            refresh={ this.refresh }
            keyId={ this.props.comment.id }
          />
          <section>
            <header>
              <img src={ this.props.comment.avatar} />
              <span>{"@" + this.props.comment.handle}</span>
            </header>
            <main>
              <p id={ "comment-" + this.props.comment.id }>{ this.props.comment.body }</p>
            </main>
            <footer>
              <p>
                <a href="#" onClick={ this.showModal }>
                  Reply
                </a>
              </p>
            </footer>
          </section>
        </div>
        <article>
          <ul>
            { this.props.children }
          </ul>
        </article>
      </li>
    )
  }
});
