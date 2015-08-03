class IssueSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :created_at, :score, :victor_score, :image

  def score
    object.get_upvotes.size - object.get_downvotes.size
  end

  def victor_score
    object.get_upvotes.size > object.get_downvotes.size ? object.get_upvotes.size : object.get_downvotes.size
  end
end
