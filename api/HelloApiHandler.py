from flask_restful import Api, Resource, reqparse
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import nltk
from sklearn.feature_extraction.text import TfidfVectorizer 

def get_keywords(string:str, word_count:int):
  string = string.lower().replace(".", "") 
  tokens = nltk.word_tokenize(string) 
  tags = nltk.pos_tag(tokens) 
  nouns = [word for (word, tag) in tags if tag == "NN"] 
  vectorizer = TfidfVectorizer() 
  tfidf = vectorizer.fit_transform([string]) 
  top_nouns = sorted(vectorizer.vocabulary_, key=lambda x: tfidf[0, vectorizer.vocabulary_[x]], reverse=True)[:word_count]
  return top_nouns

def getSongs(dreamString:str):
    # Set up Spotify credentials
    client_id = '28585fbd175d4611a91619f4fb5ed300'
    client_secret = '288a6b1734244ff8ab5fbcc0ef0b9554'
    client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
    sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)
    preferences = get_keywords(dreamString, 5)
    # Search for songs based on preferences
    song_recommendations = sp.search(q = " ".join(preferences), limit=10)
    return song_recommendations #should be a list of dictionaries
    # Display the recommended songs
    # for track in song_recommendations['tracks']:
    #     print(f"Song: {track['name']} by {track['artists'][0]['name']}")


class HelloApiHandler(Resource):
  def get(self):
    return {
      'resultStatus': 'SUCCESS',
      'message': getSongs("sweet dreams are made of these, who am I to disagree?")['tracks']['items'][0]
      }

  def post(self):
    print(self)
    parser = reqparse.RequestParser()
    parser.add_argument('type', type=str)
    parser.add_argument('message', type=str)

    args = parser.parse_args()

    print(args)
    # note, the post req from frontend needs to match the strings here (e.g. 'type and 'message')

    request_type = args['type']
    request_json = args['message']
    # ret_status, ret_msg = ReturnData(request_type, request_json)
    # currently just returning the req straight
    ret_status = request_type
    ret_msg = request_json

    if ret_msg:
      message = (getSongs(ret_msg))
    else:
      message = "No Message Found"
    
    final_ret = {"status": "Success", "message": message}

    return final_ret
