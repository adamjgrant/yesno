var RedSheet = React.createClass({
  close: function() {
    this.props.displayLink.requestChange(false);
  },
  open: function() {
    this.props.displayLink.requestChange(true);
  },
  render: function() {
    return (
      <div data-component="red sheet" className={this.props.displayLink.value ? "show" : ""}>
        <button className="close" onClick={this.close}>&times;</button>
        { this.props.contents }
      </div>
    )
  }
})
