var OpinionTable = React.createClass({
  render: function() {
    var style = this.props.issue.image ? { backgroundImage: 'url(' + this.props.issue.image + ')' } : {};
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
