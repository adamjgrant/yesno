var NotificationBadge = React.createClass({
  getInitialState: function() {
    return {
      newNotifications: 0
    }
  },
  getData: function(showGrowls) {
    $YN.get("/notifications.json", function(data) {
      if (showGrowls && this.state.newNotifications !== data.notifications) {
        var notification = data.notifications[data.notifications.length - 1]
        k$.growl({
          title: "New notification",
          text: "<p><a href=\"/notifications\">Go to your notifications</a></p>",
          type: 'green',
          delay: 2500
        });
      }
      this.setState({ newNotifications: data.notifications });
    }.bind(this));
  },
  componentDidMount: function() {
    this.getData();
    var pollCount = 0,
        poll = setInterval(function() {
          pollCount++;
          pollCount > 3 ? window.clearInterval(poll) : this.getData(true);
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
