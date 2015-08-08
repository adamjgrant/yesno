var CommenterComposer = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return ({
      body: ""
    })
  },
  saveComment: function() {
    var id = this.props.comment ? this.props.comment.id : null;
    this.props.saveComment(id, this.state.body);
    var state = this.state;
    state.body = "";
    this.setState(state);
  },
  render: function() {
    return (
      <div>
        { this.props.comment ? <p>{this.props.comment.body}</p> : '' }
        <textarea 
          placeholder="Type your comment here"
          valueLink={this.linkState('body')}
        ></textarea>
        <input type="submit" value="Save" onClick={ this.saveComment } />
      </div>
    )
  }
});
