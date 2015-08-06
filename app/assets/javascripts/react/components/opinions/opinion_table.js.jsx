var OpinionTable = React.createClass({
  render: function() {
    return (
      <section data-component="opinion table">
        <div>
          <OpinionIndex issue={this.props.issue} getData={this.props.getData} />
        </div>
      </section>
    )
  }
})
