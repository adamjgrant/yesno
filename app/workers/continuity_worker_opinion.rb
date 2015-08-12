class ContinuityWorkerOpinion
  include Sidekiq::Worker
  include Rails.application.routes.url_helpers

  def perform(issue_id, opposing_viewpoint, userId)
    # Get disagreeing opinion
    issue = Issue.find(issue_id)
    @opinion = issue.opinions.where(agree: opposing_viewpoint).last
    
    if (@opinion.present?)
      NotificationWorker.perform_async(
        userId,
        "@#{@opinion.user.handle} disagrees with you!",
        "#{@opinion.statement.slice(0,50)}...",
        issue_opinion_path(issue.id, @opinion.id),
        "View their opinion"
      )
    else
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
end
