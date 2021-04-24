import pandas as pd
import json


def scrape():
    year = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010',
            '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']


    season = ["Spring", "Summer", "Fall", "Winter"]

    years = len(year)

    imdb = []
    i = 0

    for y in year:
        i = i+1
        url = 'https://www.boxofficemojo.com/season/by-year/' + \
            y+'/?grossesOption=calendarGrosses'
        imdb.append(pd.read_html(url))

    for i in range(1, 22):
        imdb[i] = imdb[i][0].assign(Year=year[i])

    movies = []
    for i in range(1, 22):
        movies.append(imdb[i])


    imdb_df = pd.concat(movies)
