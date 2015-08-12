class Opinion < ActiveRecord::Base
  belongs_to :user
  belongs_to :issue
  has_many :comments, dependent: :destroy
  acts_as_votable

  validates :user_id, uniqueness: { scope: :issue_id,
    message: "Only one opinion per user per issue" 
  }

  def to_param
    [id, statement.slice(0, 40).parameterize].join("-")
  end

  def destroy
    @votes = Vote.where(votable_type: "Issue", votable_id: self.issue.id)
    @votes.destroy_all
  end
end
