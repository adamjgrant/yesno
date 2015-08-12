var NotificationBadge = React.createClass({
  getInitialState: function() {
    return {
      newNotifications: 0
    }
  },
  getData: function() {
    $YN.get("/notifications.json", function(data) {
      this.setState({ newNotifications: data.notifications });
    }.bind(this));
  },
  componentDidMount: function() {
    this.getData();
  },
  render: function() {
    if (this.state.newNotifications > 0) {
      return ( <a href="/notifications">{ this.state.newNotifications + " new" }</a> );
    }
    else {
      return false;
    }
  }
});
