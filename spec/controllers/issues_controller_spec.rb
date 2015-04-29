require "rails_helper"

RSpec.describe IssuesController do
  login_admin

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

  describe "GET new" do
    it "renders the new template" do
      get :new
      expect(response).to render_template(:new)
    end

    it "provides an issue object" do
      get :new
      issue = assigns(:issue)
      expect(issue).to be_a_new_record
      expect(issue).to be_a(Issue)
    end
  end

  describe "GET edit" do
    let(:issue) { create(:issue) }

    it "renders the edit template" do
      get :edit, id: issue.id
      expect(response).to render_template(:edit)
    end

    it "supplies the issue requested" do
      get :edit, id: issue.id
      expect(assigns(:issue)).to eq(issue)
    end

  end

  describe "POST create" do
    let(:valid_params) { build(:issue) }
    let(:invalid_params) { 'invalid' }

    context "with valid params" do
      it "Should allow for creation" do
        expect {
          post :create, issue: valid_params.attributes
        }.to change(Issue, :count).to(1)
        expect(filter_attributes(Issue.last.attributes)).to eq(filter_attributes(valid_params.attributes))
      end
    end

    # context "with invalid params" do
    #   it "Should not allow for creation" do
    #     expect {
    #       post :create, issue: invalid_params
    #     }.to change(Issue, :count).to(0)
    #   end
    # end
  end

  describe "PATCH/PUT update" do
    let(:issue) { create(:issue) }
    let(:valid_params) { issue.attributes }

    it "should require admin access to update an issue" do
      sign_out(:admin)
    end
  end

  private
    def filter_attributes(attrs)
      attrs.reject do |attr|
        ['id', 'created_at', 'updated_at'].include?(attr)
      end
    end
end
