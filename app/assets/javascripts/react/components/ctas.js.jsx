var CTAs = React.createClass({
  vote: function(agree) {
    $YN.mixpanel("Pressed Vote Button", {
      issue: this.props.issue
    }, function() {
      var url = "/issues/" + this.props.issue.slug + "/opinions/new#" + ( agree ? "yes" : "no" );
      location.href = url;
    }.bind(this));
  },
  render: function() {
    return (
      <div data-block="ctas">
        <a onClick={ this.vote.bind(null, true) } >
          <Icon icon="thumbs-up" />
          <span>YES</span>
        </a>
        <a onClick={ this.vote.bind(null, false) } >
          <Icon icon="thumbs-down" />
          <span>NO</span>
        </a>
      </div>
    );
  }
});
