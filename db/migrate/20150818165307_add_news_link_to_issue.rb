class AddNewsLinkToIssue < ActiveRecord::Migration
  def change
    add_column :issues, :news_link, :string
    add_column :issues, :news_title, :string
    add_column :issues, :news_image, :string
  end
end
