class AddIssueToOpinion < ActiveRecord::Migration
  def change
    add_reference :opinions, :issue, index: true
  end
end
