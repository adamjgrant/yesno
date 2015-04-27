require 'rails_helper'

RSpec.describe OpinionsController, type: :controller do

  describe "GET show" do
    let!(:opinion) { create(:opinion) }

    it "Should render the show page for a created opinion" do
      p opinion.issue_id
      get :show, id: opinion.id, issue_id: opinion.issue_id
      expect(response).to render_template(:show)
      expect(response).to be_success
    end
  end

  describe "POST create" do
    let(:valid_params) { build(:opinion) }

    context "with valid params" do
      it "Should allow for the creation of an opinion" do
        expect {
          post :create, issue_id: valid_params.issue_id, opinion: valid_params.attributes
        }.to change(Opinion, :count).to(1)
        expect(filter_attributes(Opinion.last.attributes)).to eq(filter_attributes(valid_params.attributes))
      end

    end
  end

  private
    def filter_attributes(attrs)
      attrs.reject do |attr|
        ['id', 'created_at', 'updated_at', 'issue_id', 'user_id'].include?(attr)
      end
    end
end
