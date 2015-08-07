class OpinionSerializer < ActiveModel::Serializer
  attributes :id, :handle, :statement, :gist, :agree, :created_at

  # def score
  #   object.get_upvotes.size - object.get_downvotes.size
  # end
  
  def handle
    object.user_id.nil? ? "" : object.user.handle
  end

  def created_at
    object.created_at.strftime("%d %b. %Y")
  end

end
