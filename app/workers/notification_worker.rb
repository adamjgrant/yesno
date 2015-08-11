class NotificationWorker
  def perform(ownerId, body, action_link, action_text)
    Notification.create(user_id: owner, body: body, action_link: action_link, action_text: action_text)
  end
end
