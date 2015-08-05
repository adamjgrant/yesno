var Verdict = React.createClass({
  render: function() {
    var score = this.props.score,
      response = this.props.response,
      yes_statement = this.props.yes,
      no_statement = this.props.no;

    return (
      <aside className={ (score == 0 ? '' : response.toLowerCase()) + " verdict " + this.props.className }>
        <h1 className={ (score == 0 ? 'small ' : '') }>{ this.props.response }</h1>
        { score === 0 ? '' : <p>{ yes_statement }</p> }
        { score === 0 ? '' : <p>{ no_statement }</p> }
      </aside>
    )
  }
})
