require "rails_helper"

RSpec.describe IssuesController do

  # TODO: Test with invalid params

  describe "GET index" do
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

  describe "GET show" do
    let(:issue) { create(:issue) }

    context "for viewing a single issue as a public user" do
      it "renders the show page" do
        get :show, id: issue.id
        expect(response).to render_template(:show)
      end

      it "shows an issue" do
        get :show, id: issue.id
        expect(assigns(:issue)).to eq(issue)
      end
    end
  end

  describe "POST create" do
    let(:valid_params) { build(:issue) }

    context "with valid params" do
      it "Should allow for creation" do
        expect {
          post :create, issue: valid_params.attributes
        }.to change(Issue, :count).to(1)
        expect(filter_attributes(Issue.last.attributes)).to eq(filter_attributes(valid_params.attributes))
      end
    end
  end

  private
    def filter_attributes(attrs)
      attrs.reject do |attr|
        ['id', 'created_at', 'updated_at'].include?(attr)
      end
    end
end
