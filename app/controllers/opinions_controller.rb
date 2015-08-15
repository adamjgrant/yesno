class OpinionsController < ApplicationController
  before_filter :authenticate_user!, :except => [:show]
  after_action :destroy_votes, :only => [:destroy]
  
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
      ContinuityWorkerOpinion.perform_async(@issue.id, !@opinion.agree, current_user.id)
    else
      render text: "Could not create opinion.", status: 500
    end
  end

  def update
    @opinion = Opinion.find_by_id(params[:id])
    if ((params[:score].to_i > 0) ? @opinion.liked_by(current_user) : @opinion.disliked_by(current_user))
      render text: "Voted!", status: 200
    else
      render text: "Unknown error", status: 500
    end
  end

  def show
    @opinion = Opinion.find(params[:id])
    @comments = @opinion.comments
    @comment = Comment.new

    respond_to do |format|
      format.html
      format.json { render json: @opinion }
    end
  end

  def destroy
    @opinion = Opinion.find(params[:id])

    if @opinion.destroy
      redirect_to(:back)
    else
      render text: "Could not destroy opinion", status: 500
    end
  end

  private
    def opinion_params
      params.require(:opinion).permit(:gist, :agree, :statement)
    end

    def destroy_votes
      @votes = Vote.where(votable_type: "Issue", votable_id: @opinion.issue.id)
      @votes.destroy_all
    end
end
