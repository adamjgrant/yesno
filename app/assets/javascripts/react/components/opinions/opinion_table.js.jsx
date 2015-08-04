var OpinionTable = React.createClass({
  render: function() {
    return (
      <div>
        <section data-component="opinion table">
          <OpinionIndex title="YES" agree="true" issue={this.props.issue} />
          <OpinionIndex title="NO" agree="false" issue={this.props.issue} />
        </section>
      </div>
    )
  }
})
