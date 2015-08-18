var OpinionTable = React.createClass({
  vote: function() {
    this.props.vote();
  },
  render: function() {
    var style = this.props.issue.image ? { backgroundImage: 'url(' + this.props.issue.image + ')' } : {};
    return (
      <section data-component="opinion_table">
        <p className="description">{ this.props.issue.description }</p>
        <h1>Opinions</h1>
        <p><small>
          <a href="#" className="hide-logged-out" onClick={ this.vote }>Add your opinion</a>
          <span className="hide-logged-in" onClick={ this.vote }>Sign in to add your opinion</span>
        </small></p>
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
