class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      # TODO: Render the opinion page they were on.
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:title, :body, :parent_id)
    end
end
