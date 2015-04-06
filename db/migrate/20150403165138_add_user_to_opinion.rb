class AddUserToOpinion < ActiveRecord::Migration
  def change
    add_reference :opinions, :user, index: true
  end
end
