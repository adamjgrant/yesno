class RemoveNewsSourceLinkFromIssue < ActiveRecord::Migration
  def change
    remove_column :issues, :news_source_link, :string
  end
end
