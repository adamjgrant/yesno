var Verdict = React.createClass({
  render: function() {
    var score = this.props.score,
      response = this.props.response,
      yes_statement = this.props.yes,
      no_statement = this.props.no;

    return (
      <aside className={ (score == 0 ? '' : response.toLowerCase()) + " verdict " + this.props.className }>
        <Icon 
          icon={ score === 0 ? "tie" : (score > 0 ? "thumbs-up" : "thumbs-down" ) }
        />
      </aside>
    )
  }
})
