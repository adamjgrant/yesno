var CommenterComposer = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return ({
      body: ""
    })
  },
  saveComment: function() {
    this.props.saveComment(this.props.comment.id, this.state.body);
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
