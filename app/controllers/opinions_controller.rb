class OpinionsController < ApplicationController
  before_filter :authenticate_user!
  
  def index
    @issue = Issue.find(params[:issue_id])
    @opinions = @issue.opinions

    respond_to do |format|
      format.json { render json: @opinions }
    end
  end

  def create
    @issue = Issue.find(params[:issue_id])
    @opinion = @issue.opinions.new(opinion_params)
    @opinion.user_id = user_signed_in ? current_user.id : nil

    if @opinion.save
      render text: "Opinion created successfully"
    else
      render text: "Could not create opinion.", status: 500
    end
  end

  def show
    @opinion = Opinion.find(params[:id])
  end

  private
    def opinion_params
      params.require(:opinion).permit(:gist, :agree, :statement)
    end
end
