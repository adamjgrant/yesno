class IssueSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :created_at, :score, :total_votes, :victor_score, :image, :yes, :no

  has_many :opinions

  def score
    object.get_upvotes.size - object.get_downvotes.size
  end

  def total_votes
    object.get_upvotes.size + object.get_downvotes.size
  end

  def yes
    object.get_upvotes.size
  end

  def no
    object.get_downvotes.size
  end

  def victor_score
    object.get_upvotes.size > object.get_downvotes.size ? object.get_upvotes.size : object.get_downvotes.size
  end
end
