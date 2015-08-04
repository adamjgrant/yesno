FactoryGirl.define do
  factory :user do
    handle "mockuser"
    email "foo#{Random.rand(1000).to_s}@example.com"
    password "foo123bar"
    password_confirmation "foo123bar"
  end
end
