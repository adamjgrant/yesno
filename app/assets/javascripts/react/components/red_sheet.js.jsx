var RedSheet = React.createClass({
  render: function() {
    return (
      <div data-component="red sheet" className={this.props.show}>
        <button>&times;</button>
        { this.props.contents }
      </div>
    )
  }
})
