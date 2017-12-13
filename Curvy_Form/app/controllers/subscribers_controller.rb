class SubscribersController < ApplicationController
  def create
    subscribe = Subscriber.new(subscriber_params)
    if subscribe.save
    redirect_to '/', notice: "Welcome"
    else
      redirect_to '/', notice: {errors: subscribe.errors}
    end
  end

  private

  def subscriber_params
    params.require(:subscriber).permit(:name, :email)
  end
end
