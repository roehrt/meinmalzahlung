# meinmalzahlung
**meinmalzahlung** is a demo version of a system that is supposed to work similar to einmalzahlung200.de where students can one time request a fixed
amount of money from the government.
## Goal
We have strived to fix some glaring issues we have personally encountered with the previous implementation. Our main goals were scalability, privacy, security and also user-friendliness. So in a nutshell, we wanted a system that uses less data from the student and especially less data transfer between different parties to ensure all of our goals.

## System
In the system we developed, the first thing that happens, is that all official universities send some information (like name and birthday) about their students as hashed data to us. This ensures that we can later check whether a specific student is enrolled in a university but gives us and potential hackers no easy access to this potentially sensible information. After the start of the campaign, students can use eID to login on our site. We handle the communication between the government databases and the student and then hash the student's data to compare with the data we received from the universities. Thus we can easily check whether the user is really an enrolled student and is also a German citizen and can ask them for their IBAN. After that we can initiate the payment to the student.

## Technologies
We implemented a website that handles the communication between the student, the government and us by using the eID API. The Website itself is built in React and handles all the information the student has to give us to receive the payment. For secure encryption we have used multiple frameworks like next.js, prisma and SQLite. 

- next.js, SQL, prisma, NextAuth
