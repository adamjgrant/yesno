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
$YN.post = (endpoint, data, cb, type) ->
  token = k$.$('meta[name="csrf-token"]').content
  if (!token)
    k$.status(
      text: 'Cannot verify CSRF token. This is our fault.'
      type: 'status-yellow'
    )
  req = new XMLHttpRequest()
  req.open (type || 'POST'), endpoint, true
  req.setRequestHeader 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'
  req.setRequestHeader('X-CSRF-Token', token)
  req.onload = ->
    cb(this.response)
  req.send data

# Basic PUT request
$YN.put = (endpoint, data, cb) ->
  $YN.post(endpoint, data, cb, 'PUT');

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

$YN.constructPath = (path, args) ->
  regex = /(:\w+)/
  pathParts = path.split(regex)
  if (pathParts.length == 1)
    return pathParts[0]
  `for (var i = 1; i < pathParts.length; i += 2) {
    pathParts[i] = args[(i-1)/2];
  }`
  return pathParts.join('')

# Mixpanel

$YN.mixpanel = (event, action) ->
  if (typeof(mixpanel) != "undefined")
    id = k$.$('[data-user-id]').dataset.userId
    handle = k$.$('[data-user-handle]').dataset.userHandle
    mixpanel.identify id
    mixpanel.people.set(
      "$first_name": handle
      "handle": handle
    )
    mixpanel.track event, action
  else
    console.debug("A mixpanel event was requested but not sent.")
    console.debug(event, action)
