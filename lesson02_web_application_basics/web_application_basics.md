## Goal

- Setup development environment for the first project on your local laptop/desktop.
- Create and start a tomcat server on your local.
- Create a web project and add it to your tomcat server.

## Local Development Environment Setup

### Install Java

1. Step 1, **If you already have Java 8 or higher version, you can skip this**. Open this page: [ http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

2. Step 2, Accept the License Agreement and choose the right version for your OS.
   ![img](img/U0jLGi6quFG02NKvmiINUJ729mpUdpwNet6D7WUSmorlUopWYafpuujE10Hz95m_EJ3k7xKax-lmmFLmkgA5OmXI3mCr0fL6U8K9TTNZ8vREqksNOidpelmksNpw1Ix8NuqWZ3-6.png)
3. Step 3, Download the package and install based on the instruction. Oracle may ask you to register an account before downloading.
4. Step 4: After installation, open a terminal or cmd to verify your java version is 1.8 or higher.![img](img/A8-MG1JzYyoTyEQJ9icvo5F79wlKoZpAcLKyupSYZSxQTbTbK4A-AwOT2rQ4ckBwwndUcgv-LTkbxBREpnLAkkkG0PKNdNzSLW3OFFUj8Lhnd5ZXVakPiXUqSTafCqfvHxAy1T1v.png)

### Install Eclipse

1. Step 1, Open Eclipse Download page: https://www.eclipse.org/downloads/, Choose ‘Download Packages’![img](img/7vX8KWfjWXLJgfZK8UD73Az3JYrY1EFyVwHfoiFUX6fzFz_owBzsqpneHBv4hmasr1ntTSuR0N8-sXZ_zkWu4BceG-NYZ1PwjxkwPPfmxc-7IL_JMIKaYrZcGBzg7LUceTqyzhar.png)
2. Step 2, Choose Eclipse for Enterprise Java Developers and download the archive based on your OS.
   ![img](img/uIUHGNWfYglxhyeIV7BFvdiXJ09fkvyQZroipohPP6CDbSg49aaLnsrxbrfixiS88fJck7DHhtlMc7SWda4Uf5NS38YRwKVkNevQqHFUviTeS7nHN1_P45EcPHSONt2rWo8bKKSw.png)
3. Step 3, After download, just unzip the archive to a directory you can remember, and then you can launch it from there.

### Install Apache Tomcat

1. Step 1 Open the official download page:http://tomcat.apache.org/download-90.cgi
2. Step 2, Choose the right version under Binary Distributions.
   ![img](https://lh5.googleusercontent.com/sNlLHisgXhdL0lvdemQiS3gJA2p7BL8wi9lxfou8jLgInd2xQ9M55C2OpJxDFg0wP9OEoMPM7LTkPjKGgqb-kBFph54JwC9vo8AurN2Fn5oHQdHH2Sw0ZPCusv66eOgb2g2tZbWq)
3. Step 3, Unzip the package to a directory you can remember. You’ll use that directory when you setup your server in Eclipse.

### Install Postman

1. Step 1, Open your chrome browser and search for Postman.
   ![img](https://lh4.googleusercontent.com/OIcXv4PqBR5F7ii6Utbed-BFSJaqROQ64a1TF-7ws3RyopsqWiLy3BbcNXs0w9nVh12Pg9U0bldXFobj8Axtie-CnHe_Og8j2GPHcVZA2eO2Wy4tD9f7Gd_zDKy5GVsqPI0F2f2d)

2. Step 2, Download and install it as a desktop application.
   ![img](https://lh5.googleusercontent.com/gtoYMagPLqE-y60dGT9BFkwtomPmMNJapzUq4SzjpM378ph2Pkyauq9ga47G1LXsJszNC_OTMD5CpQ95bCNl1vPs9CPCv10rkre3Yqs9PciUiLl-VeSpZwR751NVSAAKvMrwotG1)

### Register AWS Account

[Homework] Create a personal account at http://aws.amazon.com.

## Recap of Last Lesson

### Web Application Introduction

- Client: user interface

- - A user interface is for users to interact with web services. UI can provide an easy way for you to send requests to backend service, and show you the corresponding response. It usually runs in the browser, but can be provided by mobile apps.

- Web Server: host web service

- - Service is a program that can receive different requests from different clients and return correct results, a web service is a service offered by a device to others over the internet.

- Database Server: host a database

- - A database is an organized collection of data, stored and accessed electronically.

- Internet

- - Make connections between client and server so that client can successfully send request to server, and the server can successfully send response to client.

  - - Make sure request/response destination is correct.
    - Make sure delivering connections are open for data transportation.
    - Make sure the data format is understandable.

### How to build a web application

**Three tier architecture**

![image-20200206225827317](img/image-20200206225827317.png)

#### **Presentation tier**

It’s the tier that users can access directly. It provides the application’s user interface. For example, how to show nearby positions in the browser, how to provide an easy way for users to send requests to backend.

Language: HTML, CSS, Javascript, ...

Again, this part will be covered by frontend lessons.

#### **Data tier**

Mostly we don’t need to create a database system ourselves, we just need to use an existing one like MySQL, or MongoDB. What we need to do is tell the database system how to store our data. For example, what does each table look like, what’s the relationship between each other.

Language: SQL

This part will be covered by database lessons.

#### **Logic tier**

Maintain the business logic of the application, sitting between presentation tier and data tier, receive request from presentation tier, make correct database operation, and return the final result back to the presentation tier.

Language: C++, Java, Go, Python, …

Overview of our project

### Overview of our project

**Job+: AWS based Web Service Development – Job Recommendation**

The project aims to use personalization to improve ticket search and recommendation

- Created Java servlets with **RESTful** APIs to handle HTTP requests and responses
- Built **MySQL** database on **Amazon RDS** to store position data from Github API
- Designed algorithms (e.g., **content-based** recommendation) to improve job recommendation based on search history and favorite records)
- Deployed server to **Amazon EC2** to handle 150 queries per second tested by Apache JMeter.

Demo website:

![img](img/demo-website.gif)

Project Structure:

![image-20200206225827317](img/project-structure.png)

    ![img](img/project-structure.png)

## Difference between Web Application vs Web Server

1. A web server is a server that serves web pages to users via http.
2. A web application is one program that supports an individual business logic.
3. A web server can host multiple web applications (Job recommendation, Social Network, etc.)

## Setup Tomcat Server

### Tomcat

Apache Tomcat, often referred to as Tomcat Server, is an open-source Java Servlet Container developed by the Apache Software Foundation (ASF). Tomcat implements several Java EE specifications including Java Servlet, JavaServer Pages (JSP), Java EL, and WebSocket, and provides a "pure Java" HTTP web server environment in which Java code can run.

- RPC(Remote Procedure Call): a function call to a remote server.
- Java Servlet: Java class to handle RPC on server side.
- Tomcat is an environment to run your web service, it provides low level support such as making TCP connection, receiving request from client, finding the correct service to handle that request, and sending response back.
- If you want to create a web service based on Tomcat Server, all you need to do is implement the logic to handle certain HTTP requests.

Why do we use Tomcat in this project?

- One major Java framework (another one is Spring)
- Easy to learn and the concepts (servlets/handlers) have been used in many different frameworks

1. Step 1, create a new Workspace. Open Eclipse. In ‘File’ -> ‘Switch Workspace -> ‘Other’. Choose an empty folder.

   ![image-20200206230622954](img/image-20200206230622954.png)

   ![image-20200206230706997](img/image-20200206230706997.png)

   Your path can be different

2. Step 2, (optional) reset view. In ‘Window’->’Reset Perspective…’

3. Step 3, In the ‘Servers’ window, click ‘No servers are available. If you cannot find ‘Servers’, go to ‘Window’->’Show View’->’Servers’ and then ‘Servers’ would show up.

4. Step 4, Choose ‘Apache’->’Tomcat v9.0 Server’ and click Next. If you cannot find Tomcat v9.0 Server, it’s because the Eclipse version is too old. Either use a newer version of Eclipse or download an older version of Tomcat.

   ![image-20200206230841017](img/image-20200206230841017.png)

5. Step 5, Click ‘Browse’ and choose the ‘apache-tomcat-9.0.xxx’ that you have just downloaded and unzipped, click ‘Open’.

6. Step 6, Click ‘Finish’ and then you will find ‘Tomcat v9.0 Server at localhost ...’ in ‘Servers’ window

   ![image-20200206230946275](img/image-20200206230946275.png)

7. Step 7, Update Server configuration. Double Click ‘Tomcat v9.0 Server at localhost’ in Server window. In ‘Server Locations’, click ‘Use Tomcat installation ...’. **Save this file (Click the window to save + Mac:Command-S, Windows: Ctrl-S).**

   ![image-20200206231025428](img/image-20200206231025428.png)

8. Step 8, Right click ‘Tomcat v9.0 Server at localhost’, choose ‘Properties’. Click ‘Switch Location’ to change the location to /Servers/Tomcat v9.0 Server at localhost.server.

   ![image-20200206231236264](img/image-20200206231236264.png)

   ![image-20200206231241037](img/image-20200206231241037.png)

9. Step 9, To start the Tomcat Server, right click on ‘Tomcat v9.0 Server at localhost’ and click ‘Start’.

   ![image-20200206231308663](img/image-20200206231308663.png)

10. Step 10, Open your chrome browser, in the address bar, type [http://localhost:8080](http://localhost:8080/). Make sure you can view the start page.

    ![image-20200206231328469](img/image-20200206231328469.png)

    Now think about this question: what happened when I type http://localhost:8080 in browser?

## Run Your Project under Tomcat

**Maven**:

- What is Maven? Maven is a build automation tool used primarily for Java projects.
- Why do we use Maven? To simplify the dependency management for our Tomcat server. (Otherwise you have to manually import many jar files)
- Other dependency management tools? So many, python: PIP, go: dep, go module, etc.

### Create a new Web Project

1. Step 1, go to ‘File’ ->’New’->’**Maven Project**’

   ![image-20200206231600369](img/image-20200206231600369.png)

2. Step 2, Simply click Next on the first page, you don’t need to change anything.

   ![image-20200206231616146](img/image-20200206231616146.png)

3. Step 3, Under Archetype selection page, type webapp in the filter bar and select the only result(maven-archetype-webapp), then click Next.

   ![image-20200206231634601](img/image-20200206231634601.png)

4. Step 4, Choose a group id, an artifact id and a version number you like, it’ll be the name of your project, then click Finish. **Do not customize these names for now, otherwise it will be very difficult to debug**.

   ![image-20200206231655449](img/image-20200206231655449.png)

5. Step 5, Verify that your project is created. You don’t need to worry about the error from index.jsp file since it’ll be fixed in the next course.

   ![image-20200206231721682](img/image-20200206231721682.png)

6. Step 6, Right click the jupiter project under Project Explorer window, and click Configure Build Path under Build Path.

   ![image-20200206231742603](img/image-20200206231742603.png)

7. Step 7, Under Libraries tab, if the default Java library version is under java 1.8, you need to click Edit to update it. Why do we need to configure Java version and JRE?

   ![image-20200206231757435](img/image-20200206231757435.png)

8. Step 8, Under JRE System Library window, choose Execution Environment and find JavaSE-1.8, then click Finish.

   ![image-20200206231812921](img/image-20200206231812921.png)

9. Step 9, Expand your project and delete the index.jsp file under src/webapp folder since we’ll create our own frontend code in the future.

   ![img](img/WWj2qKHKnPmie1vKg0mEJMoj2QBespJUht7WUNh21tGhBstOAOYIyD_mXxyMBIMRVq8kjigGTmGGkHD67Xu5g3XuCOFMSZBIA_JP2W-ymQHGXvkBRFk-hsfcZJ_QLMcb1_fmg63s-20200206232600356.png)

### Add Your Project to Tomcat

1. Step 1, right click on your ‘Tomcat v9.0 server at localhost’ and choose ‘Add and Remove’

   ![image-20200206231852377](img/image-20200206231852377.png)

2. Step 2, move Jupiter from left to right and click finish. What will happen if I have multiple web projects?

   ![image-20200206231915979](img/image-20200206231915979.png)

3. Step 3, Open pom.xml file, set java version and add Tomcat library as dependency of your project.

   ![image-20200206231930103](img/image-20200206231930103.png)

   ```xml
   <project xmlns="http://maven.apache.org/POM/4.0.0"
   	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
   	<modelVersion>4.0.0</modelVersion>
   	<groupId>laiproject</groupId>
   	<artifactId>jupiter</artifactId>
   	<packaging>war</packaging>
   	<version>1.0</version>
   	<name>jupiter Maven Webapp</name>
   	<url>http://maven.apache.org</url>
   	<properties>
   		<javaVersion>1.8</javaVersion>
   		<maven.compiler.source>1.8</maven.compiler.source>
   		<maven.compiler.target>1.8</maven.compiler.target>
   	</properties>
   	<dependencies>
   		<dependency>
   			<groupId>junit</groupId>
   			<artifactId>junit</artifactId>
   			<version>3.8.1</version>
   			<scope>test</scope>
   		</dependency>
   		<dependency>
   			<groupId>org.apache.tomcat</groupId>
   			<artifactId>tomcat-catalina</artifactId>
   			<version>9.0.30</version>
   		</dependency>
   	</dependencies>
   	<build>
   		<finalName>jupiter</finalName>
   	</build>
   </project>
   ```

4. Step 4, **SAVE** your pom.xml change and right click your project under Project Explorer. Under Run As, click Maven Install to let Maven rebuild your project.

   ![image-20200206232008178](img/image-20200206232008178.png)

5. Step 5, Make sure you can see a successful result from the console.

   ![image-20200206232029241](img/image-20200206232029241.png)

### Test Your Project

1. Step 1, Restart your tomcat server and make sure there’s no error.

   ![image-20200206232135621](img/image-20200206232135621.png)

2. Step 2, Open a new tab in your, in the address bar, type http://localhost:8080/jupiter. Make sure you can view the start page.

   ![image-20200206232151824](img/image-20200206232151824.png)

3. Step 3, Go back to Eclipse and stop your tomcat server.

   ![image-20200206232209356](img/image-20200206232209356.png)

## Summary

- What is a web server vs a web application?
- How to setup your environment?
  - Start/Stop/Restart server
  - Add/Remove a web application from a server
