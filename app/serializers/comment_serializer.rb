class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :opinion_id, :parent_id, :score

  def score
    object.get_upvotes.size - object.get_downvotes.size
  end

end

