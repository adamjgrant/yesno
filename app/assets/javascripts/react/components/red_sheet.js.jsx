var RedSheet = React.createClass({
  render: function() {
    return (
      <div data-component="red sheet" className={this.props.show}>
        <button className="close">&times;</button>
        { this.props.contents }
      </div>
    )
  }
})
