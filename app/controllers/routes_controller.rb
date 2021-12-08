class RoutesController < ApplicationController

    def index 
        routes = Route.all 

        render json: routes
    end 

    def create 
        route = Route.create(route_params)

        if route.valid? 
            render json: route, status: :created
        else
            render json: {error: [route.errors.full_messages]}, status: :unprocessable_entity
        end

    end

    def update
        route = Route.find_by(id: params[:id])
        if route
            route.update(route_params)
        if route.valid?
            render json: route ,status: :ok
        else
            render json:{ error: [route.errors.full_messages]}, status: :unprocessable_entity
        end
        else
            render json: {error: ["Not found"]}, status: :not_found
        end
    end

    def destroy
        route = Route.find_by(id: params[:id])
        if route 
            route.destroy 
            head :no_content
        else
            render json: {error: ["Not found"]}, status: :not_found
        end
    end

    def route_params
        params.permit(
            :starting_point,
            :destination,
            :distance,
            :date,
            :user_id
        )
    end
end
