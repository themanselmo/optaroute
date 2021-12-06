class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def create
        byebug
        user = User.create!(user_params)

        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end

    end

    def show
        user = User.find_by(id: session[:user_id])

        if user
            render json: user, status: :ok
        else
            render json: {error: "not found"}, status: :not_found
        end

    end

    def user_params
        params.permit(
            :username,
            :password
        )
    end

end
