class ProfilesController < ApplicationController
  def show
    @profile = params[:id] ? User.find(params[:id]) : current_user
  end
end
