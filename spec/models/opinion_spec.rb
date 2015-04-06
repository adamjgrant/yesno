require 'rails_helper'

RSpec.describe Opinion, type: :model do
  describe "Opinions" do
    it "should create a new opinion for a user." do
      opinion = build(:opinion)
      opinion.new_record?
    end
  end
end
