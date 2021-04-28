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

@app.route('/sum', methods=['GET'])
def getSum():
    sum_df = mongo.db.sum
    result = sum_df.find()
    return Response(dumps(result, indent=4), mimetype='application/json')

@app.route('/', methods=['GET'])
def getTemplate():
    return render_template('index6.html')

<<<<<<< HEAD
@app.route('/corrie', methods=['GET'])
def getCorrie():
    return render_template('index1.html')

@app.route('/dan', methods=['GET'])
def getTopMovie():
    return render_template('index2.html')


@app.route('/alex', methods=['GET'])
def getAlex():
=======
@app.route('/movie', methods=['GET'])
def getMovie():
    return render_template('index2.html')

@app.route('/test', methods=['GET'])
def getData():
>>>>>>> 3904e5f09dcfd670db0e8b146479b3c012fe1ac6
    return render_template('index3.html')

@app.route('/tabitha', methods=['GET'])
def getTabitha():
    return render_template('index4.html')

@app.route("/releases", methods=["GET"])
def get_season_releases():
    return render_template("index1.html")


if __name__ == "__main__":
    app.run(debug=True)
    
    
