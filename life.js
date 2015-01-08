// Update birthdate values when user selects menu items           
function updatemonth(data) { 
    birthmonth = data;
}
function updateday(data) { 
    birthday = data;
}
function updateyear(data) { 
    birthyear = data;
}

// Get the birthday, month, year
 var birthday = 2
// Get the current month from current date
// var birthmonth = birthmonth
// Add 1 to current month to fit Date() method format
var birthmonth = 10;
// Add 1 to current month to fit Date() method format
var birthmonth = birthmonth + 1; 
// Get the current year from current date
var birthyear = 1977

var x = location.search;
x.toString;
x = x.replace('?','');
x = x.replace('month=','');
x = x.replace('day=','');
x = x.replace('year=','');    
y = x.split("&");
popped = y.pop();
y.unshift(popped);
birthdate = y

//alert(birthdate);

//Run the dateCount Function            
function dateCount(birthdate, current) {

    // First we split the values to arrays date1[0] is the year, [1] the month and [2] the day
    // var from = from.split("."); //split the from date
    //var current = current.split("."); //split the current date

    // Then we move the year value to the front, to align with Date() method ordering
    // var year = from.pop();
    // from.unshift(year);

    // Then we subtract one from the month to make it align with the format
                //Create a blank array to plop everything into
    //var blankarray2 = []
    //Plop all the items into the array in the proper order for Date() method = (YYYY, M, D)
    //var from = blankarray2.concat(birthyear, birthmonth, birthday);

    // Now we convert the array to a Date object, which has several helpful methods
    from = new Date(birthdate[0], birthdate[1], birthdate[2]);                
    current = new Date(current[0], current[1], current[2]);

    // We use the getTime() method and get the unixtime (in milliseconds, but we want seconds, therefore we divide it through 1000)
    from_unixtime = parseInt(from.getTime() / 1000);
    current_unixtime = parseInt(current.getTime() / 1000);

    // This is the calculated difference in seconds
    var timeDifference = current_unixtime - from_unixtime;

    // in Hours
    var timeDifferenceInHours = timeDifference / 60 / 60;

    // and finaly, in days :)
    var timeDifferenceInDays = timeDifferenceInHours / 24;

    timeDifferenceInDays = Math.abs(timeDifferenceInDays);
    timeDifferenceInDays = Math.round(timeDifferenceInDays);
    
    return timeDifferenceInDays;
}
     
// Get the current date
var currentdate = new Date();
// Get the current day from current date
var currentday = currentdate.getDate();
// Get the current month from current date
var currentmonth = currentdate.getMonth();
// Add 1 to current month to fit Date() method format
var currentmonth = currentmonth + 1; 
// Get the current year from current date
var currentyear = currentdate.getFullYear();
//Create a blank array to plop everything into
var blankarray = []
//Plop all the items into the array in the proper order for Date() method = (YYYY, M, D)
var currentdate = blankarray.concat(currentyear, currentmonth, currentday);
    
averagedays = 29930
count = dateCount(birthdate, currentdate);
pctdays = Math.round((count/averagedays)*100);
birthyear = birthdate[0];
birthmonth = birthdate[1]; 
birthday = birthdate[2];

// Print items
element = document.getElementById("birthday");
element.innerHTML = "If you were born on " + birthmonth + "-" + birthday + "-" + birthyear + "...<br><br>"
element = document.getElementById("date");
element.innerHTML = "...then today, you will have been <span class=\"accent\">alive</span> about " + count + " days and have <span class=\"accent\">lived</span> about " + pctdays + "% of an average person's <span class=\"accent\">life</span>.<br><br>Make today (and this year) your best!"
