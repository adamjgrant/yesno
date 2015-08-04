var OpinionTable = React.createClass({
  render: function() {
    return (
      <div>
        <section data-component="opinion table">
          <OpinionIndex key="yes" agree={ true } issue={this.props.issue} />
          <OpinionIndex key="no" agree={ false } issue={this.props.issue} />
        </section>
      </div>
    )
  }
})
