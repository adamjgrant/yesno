class Comment < ActiveRecord::Base
  acts_as_tree order: 'created_at DESC'
  belongs_to :opinion
end
