require "rails_helper"

RSpec.describe IssuesController do

  describe "View issues page" do
    let!(:issues) do
      5.times.map do
        create(:issue)
      end
    end

    context "for viewing issues as a public user" do
      it "renders the issues page" do
        get :index
        expect(response).to render_template(:index)
      end

      it "shows issues" do
        get :index
        expect(assigns(:issues)).to eq(issues)
      end
    end
  end

end
