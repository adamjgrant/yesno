var OpinionTable = React.createClass({
  render: function() {
    return (
      <div>
        <section data-component="opinion table">
          <OpinionIndex title="YES" issue={this.props.issue} />
          <OpinionIndex title="NO" issue={this.props.issue} />
        </section>
      </div>
    )
  }
})
