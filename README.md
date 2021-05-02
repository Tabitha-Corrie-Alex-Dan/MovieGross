# Movie Genre Popularity Depending on Month

# - The Team:

Tabitha Head, Dan Larson, Corrie Thomas, Alex Martinez

# - Brief Explanation of Project:

Is there a relation between movie releases and seasons throughout the year? We will be creating charts and visualizations to show the comparison of when movies are released, their cumulative gross, and average gross.

# - Dataset Links:
Box Office Mojo - https://www.boxofficemojo.com/season/by-year/2000/?grossesOption=calendarGrosses

# - Additional JS library:
https://animejs.com/

# - Visualization Ideas:
Bar Charts - 
Number of releases by season per year, and cumulative gross per season

![image](https://user-images.githubusercontent.com/72418166/115118843-46094480-9f73-11eb-9185-a469fe84651d.png)

Line Chart - 
Top grossing movie per season per year

<img width="666" alt="Screen Shot 2021-04-17 at 12 01 27 PM" src="https://user-images.githubusercontent.com/72418166/115119098-aea4f100-9f74-11eb-9a90-c8d50db4156f.png">

Bubble Chart - 
Average gross per season

<img width="168" alt="Screen Shot 2021-04-17 at 11 56 47 AM" src="https://user-images.githubusercontent.com/72418166/115118970-16a70780-9f74-11eb-9c0d-bbf97ae84232.png">

Summary Table - 
Total releases, average gross, and total gross for each season

# - Sketch of Final Design:

![Screen Shot 2021-04-17 at 12 10 58 PM](https://user-images.githubusercontent.com/72418166/115119422-4c4cf000-9f76-11eb-9e13-c468e54b596b.png)
![Screen Shot 2021-04-17 at 12 13 04 PM](https://user-images.githubusercontent.com/72418166/115119450-638bdd80-9f76-11eb-830c-8b28eb746106.png)

# Steps Taken to Achieve End Goal

1. After finding data, created a Jupyter Notebook file called imdb_scaraper.ipynb and used this to complete all of the scraping and data cleaning tasks.

2. After data was cleaned, it was then loaded into Mongo DataBase for later use.

3. Used MongoDB with Flask templating to create new HTML pages that displays all of the information that was scraped.

4. Created two routes '/data' and '/sum' that queried the Mongo database and passed the scraped movie data into HTML templates to display the data.

5. After all routes were created for seperate displays, ran calculations to see what seasons were popular and why.

# - Conclusion:

Movie releases by season - Not surprisingly, more movies are released in the Summer. People have more free time with school being out, and are also more social due to there being more daylight and warmer temps. It makes sense that production companies would release more movies when more people will be able to watch them.

Average Gross Per Season - Summer had the highest average gross with more than double than the smallest average grossing season (Fall). Interestingly, Spring and Winter were pretty close with their average gross proving that those seasons see around the same traffic with amount of releases.

Cumulative Gross per Season - Summer also had the highest cumulative gross. As a whole since 2001, Summer has been the time to release movies and set the companies up with their highest shot at success in box office numbers. Summer's time frame in the dataset was from May 3rd to Aug 31st. 

It's interesting to note that the seasons are actually split into five, with the holiday season being removed from the winter season. For our data, the holiday season runs November 3rd to January 4th. It would be interesting to see how the data would be affected if the holiday season were not separated from the winter months.

We also would have liked to dig deeper into the years 2001 and 2018 to see why there were so many less (2001) or more (2018) releases. And of course, the movie industry was significantly impacted by Covid during 2020, so understabdably there are less releases that year.


Top movies by season - Looking at each year, summer tends to have the top grossing movie. Again, no surprise here as summer is when most production companies release their blockbuster movies. Interestingly in 2015, the top grossing movie was released during the holiday season and the movie was Star Wars Episode VII. It's gross value was $770,381,043. The top grossing summer release, Jurassic World, was not too far behind though, valued at $647,728,196. 

One more interesting piece we found was that 2018 was the year of the sequel or remake. Incredibles 2 was the top release for summer; Goosebumps 2, Paddington 2, and Creed II were released; the next film in Star Wars came out (episode VIII); and a remake of the The Grinch hit theaters. Perhaps all of these sequels and remakes are why 2018 saw so many more releases than other years? 