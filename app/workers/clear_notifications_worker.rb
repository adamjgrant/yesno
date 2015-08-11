class ClearNotificationsWorker
  include Sidekiq::Worker

  def perform(notifications)
    @notifications.update_all(read: true)
  end

end
