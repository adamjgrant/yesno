class OpinionsController < ApplicationController
  def create
    @opinion = Opinion.new(opinion_params)

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
