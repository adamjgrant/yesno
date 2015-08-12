class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :handle, :notifications

  def notifications
    object.notifications.where(read: false).size
  end
end
