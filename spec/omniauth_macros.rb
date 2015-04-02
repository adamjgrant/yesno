module OmniauthMacros
  def mock_auth_hash
    OmniAuth.config.mock_auth[:twitter] = OmniAuth::AuthHash.new({
      'provider' => 'twitter',
      'uid' => '12345',
      'user_info' => {
        'name' => 'mockuser',
        'image' => 'mock_user_thumbnail_url'
      },
      'info' => { 
        'email' => 'foo@example.com',
      },
      'credentials' => {
        'token' => 'mock_token',
        'secret' => 'mock_secret'
      },
      'extra' => {
        'raw_info' => {
          'screen_name' => 'mockuser'
        }
      }
    })
  end
end
