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
    end

  end
end
