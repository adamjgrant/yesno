var Verdict = React.createClass({
  render: function() {
    var score = this.props.score,
      response = this.props.response,
      yes_statement = this.props.yes,
      no_statement = this.props.no;

    return (
      <aside className={ (score == 0 ? '' : response.toLowerCase()) + " verdict " + this.props.className }>
        <span className={ (score == 0 ? 'small ' : '') }>{ this.props.response }</span>
        { score === 0 || true ? '' : <p>{ yes_statement }</p> }
        { score === 0 || true ? '' : <p>{ no_statement }</p> }
      </aside>
    )
  }
})
