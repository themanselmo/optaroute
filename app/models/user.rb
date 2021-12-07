class User < ApplicationRecord

    has_many :routes
    has_many :route_dates, through: :routes
    
    has_secure_password

    validates :username, presence: true, uniqueness: true
end
