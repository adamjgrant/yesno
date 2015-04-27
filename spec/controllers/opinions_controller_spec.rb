require 'rails_helper'

RSpec.describe OpinionsController, type: :controller do

  describe "POST create" do
    let(:valid_params) { build(:opinion, issue: FactoryGirl.create(:issue)) }

    context "with valid params" do
      it "Should allow for the creation of an opinion" do
      end
    end
  end
end
