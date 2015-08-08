var CommenterComposer = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return ({
      body: ""
    })
  },
  saveComment: function() {
    this.props.saveComment(this.props.commentId, this.state.body);
  },
  render: function() {
    return (
      <div>
        <textarea 
          placeholder="Type your comment here"
          valueLink={this.linkState('body')}
        ></textarea>
        <input type="submit" value="Save" onClick={ this.saveComment } />
      </div>
    )
  }
});
