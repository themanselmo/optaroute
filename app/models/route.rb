class Route < ApplicationRecord
  belongs_to :user

  validates :starting_point, presence: true
  validates :destination, presence: true
  validates :distance, presence: true
  validates :date, presence: true
end
