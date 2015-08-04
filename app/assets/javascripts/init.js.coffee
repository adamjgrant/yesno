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

$YN.post = (endpoint, data) ->
  token = k$.$('meta[name="csrf-token"]').content
  if (!token)
    k$.status(
      text: 'Cannot verify CSRF token. This is our fault.', type: 'status-yellow' 
    )
  req = new XMLHttpRequest()
  req.open 'POST', endpoint, true
  req.setRequestHeader 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'
  req.setRequestHeader('X-CSRF-Token', token)
  req.send JSON.stringify(data)

$YN.get = (endpoint, cb) ->
  error = ->
    k$.status(
      text: "Could not get data at " + endpoint,
      type: "status-yellow"
    )

  req = new XMLHttpRequest()
  req.open 'GET', endpoint, true
  req.onload = ->
    if (this.status >= 200 and this.status < 400)
      return cb(JSON.parse(this.response))
    else
      error()

  req.onerror = -> error()
  req.send()

