class IssueSerializer < ActiveModel::Serializer
  attributes :id, 
    :name, 
    :description, 
    :created_at, 
    :score, 
    :total_votes, 
    :victor_score, 
    :image, 
    :yes, 
    :no, 
    :user_can_vote, 
    :slug, 
    :top_yes, 
    :top_no,
    :news_link,
    :news_title,
    :news_image

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

  def user_can_vote
    !(Opinion.where(user: current_user, issue: object).count > 0)
  end

  def slug
    object.to_param
  end

  def top_yes
    opinion = object.opinions.where(agree: true).order("cached_votes_score DESC").last
    OpinionSerializer.new(opinion).serializable_hash
  end

  def top_no
    opinion = object.opinions.where(agree: false).order("cached_votes_score DESC").last
    OpinionSerializer.new(opinion).serializable_hash
  end
end
