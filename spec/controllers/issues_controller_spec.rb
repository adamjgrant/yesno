require "rails_helper"

RSpec.describe IssuesController do
  describe "Issues index" do
    it "Renders issue index" do
      get :index
      expect(response).to render_template(:index)
    end

    it "Is successful" do
      get :index
      expect(response).to be_success
    end
  end
end
