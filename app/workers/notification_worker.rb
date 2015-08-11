class NotificationWorker
  include Sidekiq::Worker

  def perform(ownerId, body, action_link, action_text)
    Notification.create(
      user_id: ownerId, 
      title: title,
      body: body, 
      action_link: action_link, 
      action_text: action_text,
      read: false
    )
  end
end
