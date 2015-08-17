class ConvertToLongText < ActiveRecord::Migration
  def change
    change_column :opinions, :statement, :longtext
    change_column :comments, :body, :longtext
  end
end
