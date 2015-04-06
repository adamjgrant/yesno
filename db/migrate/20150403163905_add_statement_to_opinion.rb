class AddStatementToOpinion < ActiveRecord::Migration
  def change
    add_column :opinions, :statement, :string
  end
end
