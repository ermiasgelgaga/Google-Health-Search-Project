## Google Health Search Trends by US Metropolitan Area, 2004 – 2017
<img src="/img/google-medic-update-1533729137.gif" height="500" width="900" />

## Project Goal
Google Trends data allows us to see what people are searching for at a very local level. The goal of this project is to track, and visualize the top searches for common health issues in the United States, from Cancer to Diabetes, and compare them with the actual location of occurrences for those same health conditions to understand how search data reflects life for millions of Americans.

## Research Question
How have the most searched diseases changed over the years in the US?

## Data sources
* Kaggle: Health searches by US Metropolitan Area, 2004-2017
   - https://www.kaggle.com/GoogleNewsLab/health-searches-us-county
   
* CDC Data: 10 leading causes of death per 100,000 population from 2004-2017 
   - https://www.cdc.gov/nchs/fastats/deaths.htm
   
## Data Architectural Diagram 
<img src="/img/architectural__new.png" height="500" width="1200" />


## Data cleaning and visualization 
Python Jupyter Notebook was used in cleaning the data. This project makes use of Python Flask–powered RESTful API, HTML/CSS, JavaScript, D3, Plotly and SQL database PostgreSQL for analysis and visualisation

## Data Analysis 
The following visualization has made:
### Health Search Volume by State and Region (Choropleth map)
<img src="/img/map.png" height="500" width="900" />
###  Health Search Volume by Year (Single Line Chart)
<img src="/img/line_chart1.png" height="500" width="900" />
###  Health Search Volume by Year and Condition (Multiple Line Chart)
<img src="/img/line_chart2.png" height="500" width="900" />
###  Health Search volume by State.
<img src="/img/bar_graph.png" height="500" width="900" />
###  Correlation Between Health Conditions
<img src="/img/corroletion_matrix.png" height="500" width="900" />
### Boxplot of Health Google Search 2004-2017
<img src="/img/box_plot.png" height="500" width="900" />
### Radar plot on all Time Total Volume of Health Searches
<img src="/img/radar.png" height="500" width="900" />
### API Links
<img src="/img/Api_links.png" height="500" width="900" />

## Deployment 
The app is deployed in Heroku in order to access this click this link [Eagle Dashboard](https://eagledashboard-health.herokuapp.com/)

## Team members (Team Eagle)
* Adedamola Atekoja (‘Damola)
* Amanda Qianyue Ma
* Amos Johnson
* Ermias Gaga
* Maria Lorena
