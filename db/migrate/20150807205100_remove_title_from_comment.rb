class RemoveTitleFromComment < ActiveRecord::Migration
  def change
    remove_column :comments, :title, :string
  end
end
