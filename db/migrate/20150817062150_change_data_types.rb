class ChangeDataTypes < ActiveRecord::Migration
  def change
    change_column :opinions, :statement, :text, :limit => nil
    change_column :comments, :body, :text, :limit => nil
  end
end
