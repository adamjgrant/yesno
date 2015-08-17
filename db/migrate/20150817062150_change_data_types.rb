class ChangeDataTypes < ActiveRecord::Migration
  def change
    change_column :opinions, :statement, :text
    change_column :comments, :body, :text
  end
end
