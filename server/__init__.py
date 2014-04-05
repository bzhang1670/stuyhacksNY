from flask import Flask, request, render_template, url_for, redirect, request
import urllib2
from pymongo import MongoClient


app = Flask(__name__)
client = MongoClient("mongodb://sshi:1@troup.mongohq.com:10070/sonido")
db = client.sonido
collection = db.mapdata
AllTheThings = list(collection.find())

@app.route("/")
def home():
    blub="LOL I HAVE A WEBSITE"
    return render_template("index.html", blub=blub)


