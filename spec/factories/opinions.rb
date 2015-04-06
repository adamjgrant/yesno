FactoryGirl.define do
  factory :opinion do
    user
    agree true
    statement "I agree with this."
  end

end
