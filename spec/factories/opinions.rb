FactoryGirl.define do
  factory :opinion do
    issue
    agree true
    statement "I totally absolutely agree with this position in my heart of hearts."
    gist "I agree with this"
  end

end
