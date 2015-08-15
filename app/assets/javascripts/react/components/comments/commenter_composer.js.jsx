var CommenterComposer = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return ({
      body: ""
    })
  },
  saveComment: function() {
    var id = this.props.comment ? this.props.comment.id : null;
    this.props.saveComment(id, this.props.opinionId, this.state.body);
    var state = this.state;
    state.body = "";
    this.setState(state);
  },
  handleKeyDown: function(e) {
    var event = e.which || e.event;
    if (event === 13) {
      this.saveComment();
    }
  },
  render: function() {
    return (
      <div className="hide-logged-out">
        { this.props.comment ? <p>&ldquo;{this.props.comment.body}&rdquo;</p> : '' }
        <textarea 
          placeholder="Type your comment here"
          valueLink={this.linkState('body')}
          onKeyDown={this.handleKeyDown}
        ></textarea>
      </div>
    )
  }
});
