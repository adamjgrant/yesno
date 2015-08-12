class Admins::OpinionsController < ApplicationController
  layout "admin_layout"
  before_action :authenticate_admin!

  def index
    @opinions = Opinion.order(:created_at).page params[:page]
  end
end
