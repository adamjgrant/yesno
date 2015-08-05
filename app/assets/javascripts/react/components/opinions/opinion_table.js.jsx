var OpinionTable = React.createClass({
  render: function() {
    return (
      <section data-component="opinion table">
        <div>
          <OpinionIndex key="yes" agree={ true } issue={this.props.issue} />
          <OpinionIndex key="no" agree={ false } issue={this.props.issue} />
        </div>
      </section>
    )
  }
})
