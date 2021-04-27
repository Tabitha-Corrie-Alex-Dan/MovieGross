# Import libraries
from flask import Flask, render_template, redirect, jsonify, request, Response
from flask_pymongo import PyMongo
from bson.json_util import dumps

# Create Flask app
app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'imdb_DB'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/imdb_DB'

# PyMongo for Mongo connection
mongo = PyMongo(app)

@app.route('/data', methods=['GET'])
def get_all_seasons():
    season = mongo.db.collection
    result = season.find()
    return Response(dumps(result, indent=4), mimetype='application/json')

@app.route('/', methods=['GET'])
def getTemplate():
    return render_template('index6.html')


if __name__ == "__main__":
    app.run(debug=True)
    
    
