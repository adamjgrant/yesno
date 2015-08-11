class ProfilesController < ApplicationController
  after_action :clear_notifications, only: [:show]

  def show
    @profile = params[:id] ? User.find(params[:id]) : current_user
  end

  private
    def clear_notifications
      ClearNotificationsWorker.perform_async(@profile.id)
    end
end
