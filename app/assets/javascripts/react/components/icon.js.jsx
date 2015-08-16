var Icon = React.createClass({
  render: function() {
    var useTag = "<use xlink:href=\"" + k$.$('[data-symbol-sprite]').dataset.symbolSprite + "#" + this.props.icon + "\" />"
    return (
      <svg data-component="icon" dangerouslySetInnerHTML={{__html: useTag }}></svg>
    );
  }
});
