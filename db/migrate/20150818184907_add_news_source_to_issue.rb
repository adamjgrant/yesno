class AddNewsSourceToIssue < ActiveRecord::Migration
  def change
    add_column :issues, :news_source, :string
    add_column :issues, :news_source_link, :string
  end
end
