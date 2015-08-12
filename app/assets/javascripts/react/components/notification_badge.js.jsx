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
    var pollCount = 0,
        poll = setInterval(function() {
          pollCount++;
          pollCount > 3 ? window.clearInterval(poll) : this.getData();
        }.bind(this), 3000);
  },
  render: function() {
    if (this.state.newNotifications > 0) {
      return ( <a className="unread" href="/notifications">{ this.state.newNotifications + " new" }</a> );
    }
    else {
      return ( <a href="/notifications">Notifications</a> );
    }
  }
});
