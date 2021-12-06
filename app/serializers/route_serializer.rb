class RouteSerializer < ActiveModel::Serializer
  attributes :id, :starting_point, :destination, :distance, :date
  has_one :user
end
