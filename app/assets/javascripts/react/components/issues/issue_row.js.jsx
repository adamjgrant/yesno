var IssueRow = React.createClass({
  render: function() {
    var score = this.props.issue.score,
      response = (score > 0 ? "yes" : "no"),
      antiresponse = (score > 0 ? "yes" : "no"),
      people_say = (Math.abs(score) > 1 ? "people say" : "person says"),
      victor_prefix = this.props.issue.victor_score + " " + people_say,
      style = {
        backgroundImage: 'url(' + this.props.issue.image + ')'
      };

    var formatted_response, formatted_antiResponse;

    if (score == 0) {
      response = "Be the first to vote!";
    }
    else {
      formatted_response = victor_prefix + " " + response;
      formatted_antiResponse = victor_prefix + " " + response;
    }
    return (
      <section data-component="issue">
        <div className="img" style={ style } />
        <article>
          <aside>
            <h1>
              <a href={"/issues/" + this.props.issue.id}>{this.props.issue.name}</a>
            </h1>
            <p>{this.props.issue.description}</p>
          </aside>
          <aside>
            <h1 className={ (score == 0) ? 'small' : '' }>{ response }</h1>
            <p>{ formatted_response }</p>
            <p>{ formatted_antiResponse }</p>
          </aside>
        </article>
      </section>
    )
  }
})
