class ProfilesController < ApplicationController
  after_action :clear_notifications, only: [:show]

  def show
    @profile = params[:id] ? User.find(params[:id]) : current_user

    respond_to do |format|
      format.html
      format.json { render :json => @comments }
    end
  end

  private
    def clear_notifications
      ClearNotificationsWorker.perform_async(@profile.id)
    end
end
