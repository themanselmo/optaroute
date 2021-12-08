class User < ApplicationRecord

    has_many :routes
    
    has_secure_password

    validates :username, presence: true, uniqueness: true
end
