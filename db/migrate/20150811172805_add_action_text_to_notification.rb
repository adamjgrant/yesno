class AddActionTextToNotification < ActiveRecord::Migration
  def change
    add_column :notifications, :action_text, :string
  end
end
