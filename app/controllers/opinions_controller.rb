class OpinionsController < ApplicationController
  before_filter :authenticate_user!, :except => [:show]
  
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

    @opinion.user_id = current_user.id

    # SUCCESS

    # Set the vote
    if @opinion.agree
      @issue.upvote_from current_user
    else
      @issue.downvote_from current_user
    end

    if (@opinion.save and @opinion.valid?)
      render text: "Opinion created successfully"
    else
      render text: "Could not create opinion.", status: 500
    end
  end

  def show
    @opinion = Opinion.find(params[:id])
    @comments = @opinion.comments
    @comment = Comment.new
  end

  private
    def opinion_params
      params.require(:opinion).permit(:gist, :agree, :statement)
    end
end
