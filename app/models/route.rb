class Route < ApplicationRecord
  belongs_to :user
  has_many :route_dates
  
  validates :starting_point, presence: true
  validates :destination, presence: true
  validates :distance, presence: true
  validates :date, presence: true
end
