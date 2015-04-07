class AddGistToOpinion < ActiveRecord::Migration
  def change
    add_column :opinions, :gist, :string
  end
end
