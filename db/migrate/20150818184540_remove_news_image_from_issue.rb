class RemoveNewsImageFromIssue < ActiveRecord::Migration
  def change
    remove_column :issues, :news_image, :string
  end
end
