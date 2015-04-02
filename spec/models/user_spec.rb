require 'rails_helper'

RSpec.describe User, type: :model do
  it "does not allow for user creation without associated twitter id" do
    user = build(:user)
    expect(user.valid?).to be false
  end
end
