FactoryGirl.define do
  factory :user do
    handle "mockuser"
    email "sample@gmail.com"
    password "foo123bar"
    password_confirmation "foo123bar"
  end
end
