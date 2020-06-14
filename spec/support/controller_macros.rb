module ControllerMacros
  def login(user)
    @request.env["devise.mapping"]
    sign_in user
  end
end