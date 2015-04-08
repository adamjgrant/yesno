var RedSheet = React.createClass({
  close: function() {
    // TODO
  }
  render: function() {
    return (
      <div data-component="red sheet" className={this.props.show}>
        <button className="close">&times;</button>
        { this.props.contents }
      </div>
    )
  }
})
