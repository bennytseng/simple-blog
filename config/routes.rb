Rails.application.routes.draw do

  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'

  resources :articles do
    resources :comments
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'
end
