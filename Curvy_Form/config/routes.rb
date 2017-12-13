Rails.application.routes.draw do
  get 'subscribers/create'

  root 'pages#home'
  resources :subscribers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
