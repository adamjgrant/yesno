class AddOpinionToComments < ActiveRecord::Migration
  def change
    add_reference :comments, :opinion, index: true
  end
end
