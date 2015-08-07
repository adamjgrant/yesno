class CommentsController < ApplicationController

  def new
    @original_comment = Comment.find_by_id(params[:parent_id])
    @opinion = @original_comment.opinion
    @comment = Comment.new(parent_id: params[:parent_id])
  end

  def create
    if params[:comment][:parent_id].to_i > 0
      parent = Comment.find_by_id(params[:comment].delete(:parent_id))
      @comment = parent.children.build(comment_params)
    else
      @opinion = Opinion.find(params[:opinion_id])
      @comment = @opinion.comments.new(comment_params)
      @comment.user_id = current_user.id
    end

    if @comment.save
      redirect_to @comment.opinion
      flash[:success] = "Comment added."
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:body, :parent_id, :opinion_id)
    end
end
