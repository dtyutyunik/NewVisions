# NewVisions


# Challenge description:

1. Dashboards are displays we build at New Visions to help each other and our schools make sense of school data. Create a principal and guidance-counselor facing dashboard from the provided dataset that assists in identifying students who are chronically absent (missing X% or more of school days) for targeted interventions by guidance counselors (e.g. parent conferences, SMS messages sent, phone calls home, etc).
Specifically, build a dashboard that:
2. Displays a list of students who are chronically absent, including the data points from the data set you feel would be useful and relevant to view alongside each student.
3. Allows the principal or guidance counselor to adjust the threshold for what it means to be chronically absent. Upon modifying the threshold, the list of students should change. 

# Logic

1. Students are assigned to Guidance Counselor, so students will be displayed based on the guidance counselor selected
2. User is allowed to change the percetnage of attendance to display which students meet that amount and surpass it.
3. User is allowed to change the Guidance Counselor from the list of Guidance Counselors

# Process

1. User selects Guidance Counselor and student list is rerendered
2. User is able to change attendance percentage from 0 to 100 and upon clicking update, the list will be rerendered based on the new attendance percentage

# To Start

1. cd into client and npm start

