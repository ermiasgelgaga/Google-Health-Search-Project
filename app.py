import os
import json
import sqlalchemy
from sqlalchemy import create_engine
import pandas as pd
from config import pg_user, pg_password, db_name, pg_host  # Corrected import

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
import psycopg2

#################################################
# Database Setup
##################################################

# Construct the DATABASE_URL
DATABASE_URL = f"postgresql://{pg_user}:{pg_password}@{pg_host}/{db_name}"
DATABASE_URL = DATABASE_URL.replace('postgres://', 'postgresql://', 1)

# Create SQLAlchemy engine
engine = create_engine(DATABASE_URL)

#################################################
# Flask Setup
#################################################

app = Flask(__name__)

# Configuration for SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI', '') or "sqlite:///db.sqlite"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/Home")
def home():
    return render_template("index.html")

@app.route('/searchbyyear')
def searchbyyear():
    sql_statement = """
        SELECT year, SUM("Cancer" + "cardiovascular" + "stroke" + "depression" + "rehab" + "vaccine" + "diarrhea" + "obesity" + "diabetes") AS Searches  
        FROM search_condition 
        GROUP BY year
        ORDER BY year;
    """
    df = pd.read_sql(sql_statement, engine)
    df.set_index('year', inplace=True)
    result = df.to_json(orient='table')
    return result

@app.route('/searchbycity')
def searchbycity():
    sql_statement = """
        SELECT l.city, l.postal, l.state, l.latitude, l.longitude, SUM(s."Cancer" + s."cardiovascular" + s."stroke" + s."depression" + s."rehab" + s."vaccine" + s."diarrhea" + s."obesity" + s."diabetes") AS Searches  
        FROM location l
        INNER JOIN search_condition s ON s.location_id = l.location_id
        GROUP BY l.city, l.state, l.postal, l.latitude, l.longitude
        ORDER BY l.city;
    """
    df = pd.read_sql(sql_statement, engine)
    df.set_index('city', inplace=True)
    result = df.to_json(orient='table')
    return result

@app.route('/searchbystate')
def searchbystate():
    sql_statement = """
        SELECT l.state, l.postal, SUM(s."Cancer" + s."cardiovascular" + s."stroke" + s."depression" + s."rehab" + s."vaccine" + s."diarrhea" + s."obesity" + s."diabetes") AS Searches  
        FROM location l
        INNER JOIN search_condition s ON s.location_id = l.location_id
        GROUP BY l.state, l.postal;
    """
    df = pd.read_sql(sql_statement, engine)
    df.set_index('state', inplace=True)
    result = df.to_json(orient='table')
    return result

@app.route('/bystateandyear')
def bylocationandyear():
    sql_statement = """
        SELECT l.state, l.latitude, l.longitude, s.year, SUM(s."Cancer" + s."cardiovascular" + s."stroke" + s."depression" + s."rehab" + s."vaccine" + s."diarrhea" + s."obesity" + s."diabetes") AS Searches  
        FROM location l
        INNER JOIN search_condition s ON s.location_id = l.location_id
        GROUP BY l.state, l.latitude, l.longitude, s.year
        ORDER BY s.year;
    """
    df = pd.read_sql(sql_statement, engine)
    df.set_index('state', inplace=True)
    result = df.to_json(orient='table')
    return result

@app.route('/casesleadingdeath')
def casesleadingdeath():
    sql_statement = """
        SELECT * FROM leading_causes_of_death;
    """
    df = pd.read_sql(sql_statement, engine)
    df.set_index('year', inplace=True)
    result = df.to_json(orient='table')
    return result

@app.route('/allsearchrecord')
def allsearchrecord():
    sql_statement = """
        SELECT *
        FROM location l
        INNER JOIN search_condition s ON s.location_id = l.location_id
        ORDER BY s.year;
    """
    df = pd.read_sql(sql_statement, engine)
    df.set_index('year', inplace=True)
    result = df.to_json(orient='table')
    return result

@app.route('/location')
def location():
    sql_statement = """
        SELECT * FROM location;
    """
    df = pd.read_sql(sql_statement, engine)
    df.set_index('location_id', inplace=True)
    result = df.to_json(orient='table')
    return result

@app.route('/conditions')
def conditions():
    sql_statement = """
        SELECT * FROM search_condition;
    """
    df = pd.read_sql(sql_statement, engine)
    df.set_index('location_id', inplace=True)
    result = df.to_json(orient='table')
    return result

@app.route('/mostsserached')
def mostsserached():
    sql_statement = """
        SELECT l.state, SUM("Cancer") AS Cancer, SUM("cardiovascular") AS Cardiovascular, SUM("stroke") AS Stroke, SUM("depression") AS Depression, SUM("rehab") AS Rehab, SUM("vaccine") AS Vaccine, SUM("diarrhea") AS Diarrhea, SUM("obesity") AS Obesity, SUM("diabetes") AS Diabetes 
        FROM location l
        INNER JOIN search_condition s ON s.location_id = l.location_id
        GROUP BY l.state
        ORDER BY Cancer DESC, Cardiovascular DESC, Stroke DESC, Depression DESC, Rehab DESC, Vaccine DESC, Diarrhea DESC, Diabetes DESC
        LIMIT 10; 
    """
    df = pd.read_sql(sql_statement, engine)
    df.set_index('state', inplace=True)
    result = df.to_json(orient='table')
    return result

@app.route('/totalcondition')
def totalcondition():
    sql_statement = """
        SELECT SUM("Cancer") AS Cancer, SUM("cardiovascular") AS Cardiovascular, SUM("stroke") AS Stroke, SUM("depression") AS Depression, SUM("rehab") AS Rehab, SUM("vaccine") AS Vaccine, SUM("diarrhea") AS Diarrhea, SUM("obesity") AS Obesity, SUM("diabetes") AS Diabetes    
        FROM search_condition;
    """
    df = pd.read_sql(sql_statement, engine)
    result = df.to_json(orient='table')
    return result

@app.route('/totaldeathcase')
def totaldeathcase():
    sql_statement = """
        SELECT SUM("Accidents") AS Accidents, SUM("Alzheimer") AS Alzheimer, SUM("Cerebrovascular") AS Cerebrovascular, SUM("Diabetes") AS Diabetes, SUM("Diseases_of_heart") AS Diseases_of_Heart, SUM("Influenza_and_pneumonia") AS Influenza_and_Pneumonia, SUM("Malignant_neoplasms") AS Malignant_neoplasms, SUM("Nephrosis") AS Nephrosis, SUM("Suicide") AS Suicide, SUM("Respiratory") AS Respiratory   
        FROM leading_causes_of_death;
    """
    df = pd.read_sql(sql_statement, engine)
    result = df.to_json(orient='table')
    return result

if __name__ == '__main__':
    app.run(debug=True)
