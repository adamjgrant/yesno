class AddImageToIssue < ActiveRecord::Migration
  def change
    add_column :issues, :image, :string
  end
end
