FactoryGirl.define do
  factory :opinion do
    user
    issue
    agree true
    statement "I agree with this."
  end

end
