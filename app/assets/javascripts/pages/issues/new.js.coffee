if $YN.isPage('issues', 'new') or $YN.isPage('issues', 'edit')

  $YN.initiateFileUpload = (s3_direct_post) ->

    console.log s3_direct_post

    # Watch for the file input to change
    $file = k$.$('[type="file"]')
    $file.addEventListener 'change', ->

      # Show a pending notification
      k$.status({ text: "Uploading...", delay: 0 })

      # Create a hidden input so we can save the image name to the db.
      $input = document.createElement 'input'
      $input.type = "hidden"
      $input.name = $file.getAttribute('name')
      # TODO set url after upload
      $file.parentNode.appendChild $input

      # Upload to AWS
      $filePath = s3_direct_post.url + '/' + encodeURIComponent(s3_direct_post.fields.key.replace('${filename}', $file.files[0].name))
      `debugger;`
      req = new XMLHttpRequest()
      req.open(
        'POST',
        $filePath,
        true
      )
      req.setRequestHeader 'Content-Type', 'application/xml'


