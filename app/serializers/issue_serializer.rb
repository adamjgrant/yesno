class IssueSerializer < ActiveModel::Serializer
  attributes :id, :name, :created_at
end
