# PAGE FINDER
# Returns a boolean for the current page belonging to an action
# and/or controller.
window.$YN = new Object()

$YN.isPage = (controller, action) ->
  controller = controller || true
  action = action || true
  $body = k$.$('body').dataset
  return (
    ($body.action == action || action == true) and ($body.controller == controller || controller == true)
  )
