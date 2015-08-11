class ClearNotificationsWorker
  include Sidekiq::Worker

  def perform(user_id)
    @notifications = Notification.where(user_id: user_id)
    @notifications.update_all(read: true)
  end

end
