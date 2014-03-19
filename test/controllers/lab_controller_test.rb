require 'test_helper'

class LabControllerTest < ActionController::TestCase
  test "should get love" do
    get :lab
    assert_response :success
  end

end
