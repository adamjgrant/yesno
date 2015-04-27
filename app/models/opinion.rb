class Opinion < ActiveRecord::Base
  belongs_to :user
  belongs_to :issue
  acts_as_votable
end
