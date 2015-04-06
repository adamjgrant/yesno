FactoryGirl.define do
  factory :identity do
    user
    provider "twitter"
    uid "MyString"
  end
end
