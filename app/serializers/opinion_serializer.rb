class OpinionSerializer < ActiveModel::Serializer
  attributes :id, :handle, :statement, :gist, :agree

  # def score
  #   object.get_upvotes.size - object.get_downvotes.size
  # end
  
  def handle
    object.user_id.nil ? "" : object.user.handle
  end

end
