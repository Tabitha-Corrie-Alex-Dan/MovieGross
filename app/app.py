# Import libraries
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scrape_mars

# Create Flask app
app = Flask(__name__)

# PyMongo for Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/movieseasons")
