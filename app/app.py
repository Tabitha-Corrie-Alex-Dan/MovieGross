# Import libraries
from flask import Flask, render_template, redirect, jsonify, request
from flask_pymongo import PyMongo
from bson.json_util import dumps

# Create Flask app
app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'imdb_DB'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/imdb_DB'

# PyMongo for Mongo connection
mongo = PyMongo(app)

@app.route('/', methods=['GET'])
def get_all_seasons():
    season = mongo.db.collection
    result = season.find()
    return dumps(result, indent=4)
    # output = []

    # for q in season.find():
    #     output.append({'index': q['index'],'season': q['season'],'cum_gross': q['cum_gross'],'pct_of_year': q['pct_of_year'], 'releases': q['releases'], 'average': q['average'], 'genre': q['genre'], 'budget': q['budget'], 'runtime':q['runtime'], 'gross': q['gross'], 'pct_of_total': q['pct_of_total'], 'year': q['year']})
        
    #     return jsonify({'result': output})

if __name__ == "__main__":
    app.run(debug=True)

@app.route('/find', methods=['GET'])
def get_all():
    season = mongo.db.collection     
    return "<h1>hello world</h1>"

if __name__ == "__main__":
    app.run(debug=True)