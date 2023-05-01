from flask import (
    Flask,
    request
)

app = Flask(__name__, template_folder="templates")

@app.route('/', methods = ['GET'])
def home():
    userId = "hellenekpo"
    if request.method == 'GET':
        return {"home endpoint": userId}
    


app.run(port=5000)
