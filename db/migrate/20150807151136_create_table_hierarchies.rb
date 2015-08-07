class CreateTableHierarchies < ActiveRecord::Migration
  def change
    create_table :comment_hierarchies do |t|
      t.integer :ancestor_id, :null => false   # ID of parent/grandparent/greatgrand...
      t.integer :descendant_id, :null => false # ID of target comment
      t.integer :generations, :null => false   # Number of gens between
    end

    # For "all progeny of..." and leaf selects:
    add_index :comment_hierarchies, [:ancestor_id, :descendant_id, :generations],
              :unique => true, :name => "comment_anc_desc_udx"

    # For "all ancestors of..." selects
    add_index :comment_hierarchies, [:descendant_id],
              :name => "comment_desc_idx"
  end
end
