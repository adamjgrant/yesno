if ($YN.isPage('issues', 'index')) {
  React.render(
    <IssueIndex url="issues.json" />,
    k$.$('[data-render]')
  )
}

if ($YN.isPage('issues', 'show')) {
  React.render(
    <IssueSingle />,
    k$.$('[data-render]')
  )
}
