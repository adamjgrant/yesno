class Comment < ActiveRecord::Base
  acts_as_tree order: 'created_at ASC'
  belongs_to :opinion
  belongs_to :user
  acts_as_votable

  def self.json_tree(nodes)
    nodes.map do |node, sub_nodes|
      {
        :opinion_id => node.opinion_id, 
        :body => node.body, 
        :id => node.id, 
        :parent_id => node.parent_id, 
        :score => node.get_upvotes.size - node.get_downvotes.size,
        :avatar => node.user.avatar,
        :handle => node.user.handle,
        :comments => Comment.json_tree(sub_nodes).compact
      }
    end
  end
end
