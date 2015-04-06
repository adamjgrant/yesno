class AddAgreeToOpinion < ActiveRecord::Migration
  def change
    add_column :opinions, :agree, :boolean
  end
end
