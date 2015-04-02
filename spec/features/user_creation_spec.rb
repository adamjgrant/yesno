require "rails_helper"

RSpec.describe Users::SessionsController do
  describe "Twitter authentication" do

    it "can sign in with Twitter" do
      visit '/'
      expect(page).to have_content("Sign in with Twitter")
      mock_auth_hash
      click_link "Sign in with Twitter"
      expect(page).to have_content("mockuser")
      expect(page).to have_content("Log out")
    end

  end
end
