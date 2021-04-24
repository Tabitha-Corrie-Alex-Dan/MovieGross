# Import libraries
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scraper

# Create Flask app
app = Flask(__name__)

# PyMongo for Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/movieseasons")




if __name__ == "__main__":
    app.run(debug=True)