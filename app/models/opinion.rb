class Opinion < ActiveRecord::Base
  belongs_to :user
  belongs_to :issue
  acts_as_votable

  validates :user_id, uniqueness: { scope: :issue_id,
    message: "Only one opinion per user per issue" 
  }
end
