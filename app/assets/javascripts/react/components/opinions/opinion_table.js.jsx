var OpinionTable = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {
      agree: false,
      showRedSheet: false
    };
  },
  openRedSheet: function(agree) {
    var state = this.state;
    state.showRedSheet = true;
    state.agree = agree;
    this.setState(state);
    window.scrollTo(0, 0);
  },
  updateAgree: function(agree) {
    var state = this.state;
    state.agree = agree;
    this.setState(state);
  },
  render: function() {
    var style = this.props.issue.image ? { backgroundImage: 'url(' + this.props.issue.image + ')' } : {};
    return (
      <section data-component="opinion_table">
        <p className="description">{ this.props.issue.description }</p>
        <h1>Opinions</h1>
        <p><small>
          <a href="#" className="hide-logged-out" onClick={ this.openRedSheet.bind(null, false) }>Add your opinion</a>
          <span className="hide-logged-in">Sign in to add your opinion</span>
        </small></p>
        <div>
          <OpinionIndex 
            issue={this.props.issue} 
            getData={this.props.getData} 
          />
        </div>
        <RedSheet
          displayLink={this.linkState('showRedSheet')}
          agree={this.state.agree}
          issue={this.props.issue}
          key={this.props.issue.id}
          getData={this.props.getData}
          updateAgree={this.updateAgree}
        />
      </section>
    )
  }
})
