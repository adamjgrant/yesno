class OpinionsController < ApplicationController
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

    if @opinion.save
      render text: "Opinion created successfully"
    else
      render text: "Could not create opinion.", status: 500
    end
  end

  def show
    @opinion = Opinion.find_by(id: params[:id])
  end

  private
    def opinion_params
      params.require(:opinion).permit(:gist, :agree, :statement)
    end
end
