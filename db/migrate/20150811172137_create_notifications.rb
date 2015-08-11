class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.string :body
      t.boolean :read
      t.string :action_link
      t.references :user, index: true

      t.timestamps
    end
  end
end
