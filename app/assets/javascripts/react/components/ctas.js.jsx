var CTAs = React.createClass({
  render: function() {
    return (
      <div data-block="ctas">
        <a href={ "/issues/" + this.props.slug + "/opinions/new#yes" }>
          <Icon icon="thumbs-up" />
          <span>YES</span>
        </a>
        <a href={ "/issues/" + this.props.slug + "/opinions/new#no" }>
          <Icon icon="thumbs-down" />
          <span>NO</span>
        </a>
      </div>
    );
  }
});
