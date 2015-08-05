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

    # TODO: This shouldn't be necessary. The user should be redirected to
    # authentication if they haven't been already.
    @opinion.user_id = current_user.nil? ? nil : current_user.id

    # Set the vote
    if @opinion.agree
      @issue.upvote_from current_user
    else
      @issue.downvote_from current_user
    end

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
