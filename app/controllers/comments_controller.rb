class CommentsController < ApplicationController

  def index
    comments = Opinion.find(params[:opinion_id]).comments
    parent_comment = Comment.new(body: 'Placeholder Ancestor', opinion_id: 0)

    comments.each do |comment|
      parent_comment.add_child comment
    end

    @comments = parent_comment.hash_tree
    
    respond_to do |format|
      format.json { render :json => Comment.json_tree(@comments) }
      # format.json { render :json => @comments }
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

  def show

  end

  private
    def comment_params
      params.require(:comment).permit(:body, :parent_id, :opinion_id)
    end
end
