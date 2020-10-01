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
<img src="/img/Screen Shot 2020-10-01 at 12.21.00 AM.png" height="500" width="1200" />


## ETL

### EXTRACT 

Data sourced from Google Trend, specifically Google Health Search from 2004 - 2017.

### Transform

Data cleaned and transformed by using Python Jupyter Notebook. [`Health_Analysis.ipynb`](https://github.com/ermiasgelaye/Google-Health-Search-Project/blob/master/Data/Data_Cleaning/Health_Analysis.ipynb)

### LOAD 

- This project used Python Jupyter Notebook to load transformed data in to PostgreSQL database. [`loadData.ipynb`](https://github.com/ermiasgelaye/Google-Health-Search-Project/blob/master/Data/database/load_in_to_db/loadData.ipynb)

- Python Flask–powered RESTful API were used to deploy the data into the web, and API end point links created.

<img src="/img/Api_links.png" height="300" width="300"/>

## Deployment 
The app is deployed in Heroku in order to access the page click the following link 
[Eagle Dashboard](https://eagledashboard-health.herokuapp.com/)

- https://eagledashboard-health.herokuapp.com/


## Data Analysis and Visualization

The following visualization made:

### Health Search Volume by State and Region (Choropleth map)
<img src="/img/map.gif" height="500" width="900" />


### Interactive Charts With Dropdown Selection "City"
<img src="/img/comparison.gif" height="500" width="900" />

###  Health Search Volume by Year (Single Line Chart)
<img src="/img/line_chart1.gif" height="500" width="900" />

###  Health Search Volume by Year and Condition (Multiple Line Chart)
<img src="/img/line_chart2.gif" height="500" width="900" />

###  Health Search volume by State.
<img src="/img/bar_graph.gif" height="500" width="900" />

###  Correlation Between Health Conditions
<img src="/img/corroletion_matrix.gif" height="500" width="900" />

### Boxplot of Health Google Search 2004-2017
<img src="/img/box_plot.gif" height="500" width="900" />

### Radar Plot on All Time Total Volume of Health Searches
<img src="/img/radar.gif" height="500" width="900" />

### Radar Plot on the Sum Total Volume of 10 Leading Causes of Death Per 100,000 Population from 2004-2017
<img src="/img/radar2.gif" height="500" width="900" />


## Team members (Team Eagle)
* Adedamola Atekoja (‘Damola)
* Amanda Qianyue Ma
* Amos Johnson
* Ermias Gaga
* Maria Lorena
