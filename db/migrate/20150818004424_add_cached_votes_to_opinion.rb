class AddCachedVotesToOpinion < ActiveRecord::Migration
  def change
    add_column :opinions, :cached_votes_total, :integer, :default => 0
    add_column :opinions, :cached_votes_score, :integer, :default => 0
    add_column :opinions, :cached_votes_up, :integer, :default => 0
    add_column :opinions, :cached_votes_down, :integer, :default => 0
    add_index  :opinions, :cached_votes_total
    add_index  :opinions, :cached_votes_score
    add_index  :opinions, :cached_votes_up
    add_index  :opinions, :cached_votes_down
  end
end
