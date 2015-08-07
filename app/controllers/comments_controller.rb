class CommentsContrller < ApplicationController
  def show

  end

  def create

  end

  private
    def comment_params
      params.require(:comment).permit(:title, :body, :parent_id)
    end
end
