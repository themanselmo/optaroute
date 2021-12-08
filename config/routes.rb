Rails.application.routes.draw do
  
  resources :routes, only: [:create, :index, :destroy, :update]
  resources :users, only: [:create ]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  get "/myroutes", to: "users#my_routes"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
