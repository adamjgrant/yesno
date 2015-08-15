var Icon = React.createClass({
  render: function() {
    var useTag = "<use xlink:href=\"/svg/svg-sprite#" + this.props.icon + "\" />"
    return (
      <svg data-component="icon" dangerouslySetInnerHTML={{__html: useTag }}></svg>
    );
  }
});
