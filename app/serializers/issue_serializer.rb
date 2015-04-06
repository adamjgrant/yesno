class IssueSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :created_at, :score

  def score
    object.get_upvotes.size - object.get_downvotes.size
  end
end
