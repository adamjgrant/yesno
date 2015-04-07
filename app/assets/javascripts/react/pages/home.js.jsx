if ($YN.isPage('issues', 'index')) {
  React.render(
    <IssueIndex url="issues.json" />,
    k$.$('[data-render]')
  )
}

