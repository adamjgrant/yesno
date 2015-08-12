class ContinuityWorkerOpinion
  include Sidekiq::Worker

  def perform(issue_id, opposing_viewpoint, userId)
    # Get disagreeing opinion
    issue = Issue.find(issue_id)
    @opinion = issue.opinions.where(agree: opposing_viewpoint).last
    
    # Get issue that doesn't have their vote
    issues = Issue.all
    issues.each do |issue|
      opinions = issue.opinions.where(user_id: userId)
      if (opinions.size == 0)
        @issue = issue
        break
      end
    end

  end
end