class Comment < ActiveRecord::Base
  acts_as_tree order: 'created_at ASC'
  belongs_to :opinion
  belongs_to :user

  def self.json_tree(nodes)
    nodes.map do |node, sub_nodes|
      {:body => node.body, :id => node.id, :parent_id => node.parent_id, :comments => Comment.json_tree(sub_nodes).compact}
    end
  end
end
