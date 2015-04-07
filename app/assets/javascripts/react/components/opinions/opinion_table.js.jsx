var OpinionTable = React.createClass({
  getInitialState: function() {
    return {
      opinions: [
        {
          id: 0,
          statement: "Loading...",
        }
      ]
    }
  },
  render: function() {
    return (
      <table>
        <thead>
        </thead>
        <tbody>
          <OpinionIndex opinions={this.state.opinions} />
        </tbody>
      </table>
    )
  }
})
