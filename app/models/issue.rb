class Issue < ActiveRecord::Base
  acts_as_votable
  has_many :opinions

  def to_param
    [id, name.parameterize].join("-")
  end
end
