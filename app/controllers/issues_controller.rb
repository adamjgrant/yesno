class IssuesController < ApplicationController
  before_action :set_issue, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_admin!, only: [:edit, :update, :destroy, :create]

  # GET /issues
  # GET /issues.json
  def index
    @issues = Issue.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @issues }
    end
  end

  # GET /issues/1
  # GET /issues/1.json
  def show
    upvotes = @issue.get_upvotes.size
    downvotes = @issue.get_downvotes.size
    victor_score = upvotes > downvotes ? upvotes : downvotes
    people_said = (victor_score > 1 ? " people said " : " person said ")
    yes_or_no = (upvotes > downvotes ? "YES" : "NO")
    @victor_phrasing = (victor_score > 0 ? victor_score.to_s + people_said + yes_or_no : "Be the first to vote")

    respond_to do |format|
      format.html { render :show }
      format.json { render :json => @issue, :serializer => IssueSerializer }
    end
  end

  # GET /issues/new
  def new
    @s3_direct_post = S3_BUCKET.presigned_post(key: "uploads/#{SecureRandom.uuid}/${filename}", success_action_status: 201, acl: :public_read)
    @issue = Issue.new
  end

  # GET /issues/1/edit
  def edit
  end

  # POST /issues
  # POST /issues.json
  def create
    @issue = Issue.new(issue_params)

    respond_to do |format|
      if @issue.save
        format.html { redirect_to @issue, notice: 'Issue was successfully created.' }
        format.json { render :show, status: :created, location: @issue }
      else
        format.html { render :new }
        format.json { render json: @issue.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /issues/1
  # PATCH/PUT /issues/1.json
  def update
    @issue = @issue || Issue.find(params[:id])
    @score = params[:score].to_i
    if params[:score]

      if @score > 0
        @issue.upvote_from current_user
      else
        @issue.downvote_from current_user
      end
      render :text => "Success"

    else

      respond_to do |format|
        if @issue.update(issue_params)
          format.html { redirect_to issues_path }
          format.json { render :show, status: :ok, location: @issue }
        else
          format.html { render :edit }
          format.json { render json: @issue.errors, status: :unprocessable_entity }
        end
      end

    end
  end

  # DELETE /issues/1
  # DELETE /issues/1.json
  def destroy
    @issue.destroy
    respond_to do |format|
      format.html { redirect_to issues_url, notice: 'Issue was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_issue
      @issue = Issue.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def issue_params
      params.require(:issue).permit(:name, :description, :score, :image)
    end
end
