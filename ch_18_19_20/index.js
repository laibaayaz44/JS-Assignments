var course=[];
 var course1=prompt(" enter course 1" );
 course.push(course1);
 var course2=prompt(" enter course 2");
 course.push(course2);

 var course3=prompt(" enter course 3");
 course.push(course3);

 var course4=prompt(" enter course 4");
 course.push(course4);

 var course5=prompt(" enter course 5" );
 course.push(course5);
 alert(course);

 // using for loop for edit and showing each course name

 for(var i=0; i<course.length;i++){

course[i]=prompt("edit course"+(i+1),course[i]);

 }
 //print
 alert(course);