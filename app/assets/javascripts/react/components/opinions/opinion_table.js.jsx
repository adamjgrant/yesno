var OpinionTable = React.createClass({
  getInitialState: function() {
    var initialData = {
      yes: [
        {
          id: 0,
          gist: "Loading",
          statement: "",
          handle: ""
        }
      ],
    }
    initialData.no = initialData.yes
    return initialData
  },
  render: function() {
    return (
      <div>
        <section data-component="opinion table">
          <OpinionIndex title="YES" opinions={this.state.yes} />
          <OpinionIndex title="NO" opinions={this.state.no} />
        </section>
      </div>
    )
  }
})
