class CommentsController < ApplicationController

  def create
    @opinion = Opinion.find(params[:opinion_id])
    @comment = @opinion.comments.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      redirect_to @comment.opinion
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:body, :parent_id, :opinion_id)
    end
end
