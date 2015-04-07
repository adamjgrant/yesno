var OpinionIndex = React.createClass({
  render: function() {
    var opinionRows = this.props.opinions.map(function(row) {
      return (
        <td key={row.id}>TODO</td>
      )
    })
    return (
      <tr>
        { opinionRows }
      </tr>
    )
  }
})
