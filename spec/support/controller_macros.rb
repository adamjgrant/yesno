module ControllerMacros
  def login_admin
    before(:each) do
      @request.env["devise.mapping"] = Devise.mappings[:admin]
      DatabaseCleaner.clean
      sign_in create(:admin)
    end
  end

  def login_user
    before(:each) do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      # DatabaseCleaner.clean
      user = create(:user)
      sign_in user
    end
  end
end
