class OpinionSerializer < ActiveModel::Serializer
  attributes :id, :score, :handle, :avatar, :statement, :gist, :agree, :created_at, :comments, :slug

  def score
    object.get_upvotes.size - object.get_downvotes.size
  end
  
  def handle
    object.user_id.nil? ? "" : object.user.handle
  end

  def avatar
    object.user_id.nil? ? "" : object.user.avatar
  end

  def created_at
    object.created_at.strftime("%d %b. %Y")
  end

  def comments
    object.comments.where(opinion_id: object.id).count
  end

  def slug
    object.to_param
  end

end
