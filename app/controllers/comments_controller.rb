class CommentsController < ApplicationController

  def index
    comments = Opinion.find(params[:opinion_id]).comments.where(parent_id: nil)
    @comments = Array.new

    comments.each do |comment|
      @comments.push Comment.json_tree(comment.hash_tree).first
    end

    respond_to do |format|
      format.json { render :json => @comments }
    end
  end

  def new
    @original_comment = Comment.find_by_id(params[:parent_id])
    @opinion = @original_comment.opinion
    @comment = Comment.new(parent_id: params[:parent_id])
  end

  def create
    if params[:parent_id].to_i > 0
      parent = Comment.find_by_id(params[:parent_id])
      @comment = parent.children.build(comment_params)
    else
      @opinion = Opinion.find(params[:opinion_id])
      @comment = @opinion.comments.new(comment_params)
    end
    @comment.user_id = current_user.id

    if @comment.save
      render :text => "Comment added successfully", :status => 200
      flash[:success] = "Comment added."
    end
  end

  def update
    @comment = Comment.find_by_id(params[:id])
    if @comment.liked_by current_user
      render text: "Upvoted!", status: 200
    else
      render text: "Unknown error", status: 500
    end
  end

  def show

  end

  private
    def comment_params
      params.require(:comment).permit(:body, :parent_id, :opinion_id)
    end
end
