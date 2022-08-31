# UFOs

On this project we focused on enabling users to filter through data involving UFO's sightings on Earth. As the user inputs certain criteria, the table automatically filters based on those parameters.

## Results

A user can use this page to find similar events as one may have experienced at one point in time. The table allows us to enter multile variables unti we pin down the area we are looking for or interested in. 

For example, we can filter the recorded events by the shape of the UFO, in this case we will use circle.

![Circle_filter](https://user-images.githubusercontent.com/107765611/187578037-ba36ea33-1fdb-4993-9ce5-12b108d7caca.png)

Assuming we live in Massachusetts we can enter "ma" for State and reduce the results to a single event as shown below.

![Ma_filter](https://user-images.githubusercontent.com/107765611/187578061-8a5ea9a9-c9a5-4ccc-baf5-467c73253b3d.png)

## Drawback

The biggest drawback of such table is that the input on each filter has to exactly match the text used to create the table. If for some reason we capitalize a letter, or enter an incorrect date, there will be no results shown. On the table above, we typed "ma" for Massachussets and we obtained one result. If the "M" is capitalized our filtered results dissapear:

![Ma_filter_Cap](https://user-images.githubusercontent.com/107765611/187578088-ed3e6bb1-916b-4459-8afd-9cfc56a14230.png)

### Recommendations

1. Create code where the capitalization of a letter won't have an effect on the results shown. 
2. Create a button that will show the total entries submitted as of today for sightings around the world. This will allow the user to get a perspective on how many incidents were reported, based on the entered criteria.
