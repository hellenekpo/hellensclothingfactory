from flask import (
    Flask,
    request
)

from flask_cors import CORS

app = Flask(__name__, template_folder="templates")
CORS(app)
@app.route('/', methods = ['GET'])
def home():
    userId = "hellenekpo"
    if request.method == 'GET':
        return {"home_endpoint": userId}
    


app.run(port=5000)
