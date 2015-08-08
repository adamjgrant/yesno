# PAGE FINDER
# Returns a boolean for the current page belonging to an action
# and/or controller.
window.$YN = new Object()

# Determine which page we're on
$YN.isPage = (controller, action) ->
  controller = controller || true
  action = action || true
  $body = k$.$('body').dataset
  return (
    ($body.action == action || action == true) and ($body.controller == controller || controller == true)
  )

# Basic POST request
$YN.post = (endpoint, data, cb) ->
  token = k$.$('meta[name="csrf-token"]').content
  if (!token)
    k$.status(
      text: 'Cannot verify CSRF token. This is our fault.'
      type: 'status-yellow'
    )
  req = new XMLHttpRequest()
  req.open 'POST', endpoint, true
  req.setRequestHeader 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'
  req.setRequestHeader('X-CSRF-Token', token)
  req.onload = ->
    cb(this.response)
  req.send data

# Basic GET request
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
