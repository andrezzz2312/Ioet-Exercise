# ACME JavaScript Application

## Contents

- [Description](#description)
- [Instructions](#instructions)
- [Solution](#solution)
- [Approach](#approach)
- [Metodology](#metodology)

## Description

JavaScript application to check how often employees have been coincided in the office by their work shifts.

## Instructions

In order to use the application, you only need to open the [Index.html](/index.html) by clicking on it.

In this website you only need to create a **.txt** file with the following structure:

```txt
Employee name = First two letters of the Day, Starting Shift Hour - Ending Shift Hour
```

for example:

```
Josh=MO10:00-12:00
```

You can also add the rest of the days by separating them with a comma:

```
Josh=MO10:00-12:00,TU10:00-12:00,WE12:00-14:00,TH01:00-03:00,FR12:00-15:00,SA14:00-18:00,SU20:00-21:00
```

Also you can add other employees in the same file by using a linebreak:

```
Josh=MO10:00-12:00
Susan=MO10:00-15:00
```

Finally after creating the _.txt_ file, you can proceed to click the "Choose File" button to select your _.txt_ file and use it as an input, after doing so, the application will automatically check the coincidences of work shifts among the employees and show it below the button.

Also it is possible to see this answer too from the console, by clicking the F12 key and going to the console section.

## Solution

My solution to the problem presented to make this application was creating a simple UI to attatch the corresponding _.txt_ file, after doing so, a web build-in API called "FileReader" will allow me to access to the information of the _.txt_ file.

After having the information I proceeded to split it by linebreaks, so I would end up with an array of strings, that would be my employee's information.

I continued to split this information even further by using for loops and a map function, to end up with an array of objects showing the different days, start and end hours of their shifts.

After storing all the pertinent information, I started to create a comparing system made out of for loops that basically will iterate across all the employees and all their work days, and compare them with the next employee in the list by also checking its own particular work days, this system after having all the information it needs compare if one employee works the same day as the other one who is compared with, and checks if its start hour is less than the other one end hour, and if its end hour is greater than its respective start hour. Also this system checks after the first loop across the employees if it is comparing with a employee that has been compared before, and it skips it leaving us with the actual solution.

By doing so I end up with the information that I need, and the last step is concatenate it in a presentable way which I did it by storing each answer in an object, appending each couple of employees as an object property, and setting the amount of times they coincided as its values. And finally having this object I printed this values with a for loop both through console and UI.

## Architecture

I used a client-server architecture with the only resources being
an HTML file for the UI/Presentation as a breach between the user and the application, and a Javascript file for the functionality itself.

## Approach

My first approach of the problem was gathering all the information possible, and localize what was the start point or input and the desired end point of the problem, after doing so, I segmented the process in a few chunks by execution time, basically ending up with the first chunk that would be handling how to the enter the data, the second one being how to organize this information to being able to work with it afterwards, the third one was the main functionality processing the data, and the last one was how to display the information.

## Methodology

Because of the scale, functionality, and my approach on the proyect, the Waterfall methodology was the one that worked the best for me, with this one I was allowed to build the application by different categorized portions until I end up with the finished product.
