var OpinionTable = React.createClass({
  render: function() {
    return (
      <section data-component="opinion_table">
        <h1>Opinions</h1>
        <div>
          <OpinionIndex 
            issue={this.props.issue} 
            getData={this.props.getData} 
          />
        </div>
      </section>
    )
  }
})
