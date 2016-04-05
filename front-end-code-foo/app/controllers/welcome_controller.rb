class WelcomeController < ApplicationController

  def index
      @videos = HTTParty.get("http://ign-apis.herokuapp.com/videos?startIndex=30\u0026count=20")
      @http_video_json = JSON.parse(@videos.body)

      @articles = HTTParty.get("http://ign-apis.herokuapp.com/articles?startIndex=30\u0026count=20")
      @http_articles_json = JSON.parse(@articles.body)
  end
end
