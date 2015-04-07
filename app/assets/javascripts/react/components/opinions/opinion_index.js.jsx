var OpinionIndex = React.createClass({
  getInitialState: function() {
    return {
      redSheet: {
        show: false,
        delayedShow: false
      }
    }
  },
  openRedSheet: function() {
    this.setState({
      redSheet: {
        show: true
      }
    })
    var self = this;
    setTimeout(function() {
      self.setState({
        redSheet: {
          show: true,
          delayedShow: "show"
        }
      })
    }, 100)
  },
  render: function() {
    var opinionRows = this.props.opinions.map(function(row) {
      return (
        <div key={row.id} data-component="opinion preview">
          <h1>{row.gist}</h1>
          <p>{row.statement}</p>
        </div>
      )
    })
    return (
      <div data-component="opinion column">
        { this.state.redSheet.show ? <RedSheet show={ this.state.redSheet.delayedShow } /> : "" }
        <h1>{this.props.title}</h1>
        <p>
          <a href="#" onClick={this.openRedSheet}>Add your opinion</a>
        </p>
        { opinionRows }
      </div>
    )
  }
})
