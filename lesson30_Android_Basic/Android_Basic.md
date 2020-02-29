## Before We start

1. Download Android Studio: https://developer.android.com/studio/
2. Install Android Studio. At the welcome page, click bottom right “Configure”

<img src="img/anFd8JIJCgCMCOZPkwg_8sUnXxupcrCxEPrqZUKw69FhkztFDLi4DoMwa5oq5RPnehLpoTl0inyEbqblbDUTGoGZhLXW8Fh6Lva9AsgqGfPprRDP3rjfXOmJRDgrfWSxC0a4I8Lc.png" alt="img" style="zoom:200%;" />

![img](img/aA8iaVuWAGVzy6i0Lmpkx1lOyTF_G6WqwWc7lZjBpJ5ivi92az-HMTynsv0ILYzqkxHIHPBFD1FOpz91-XERK2tWfkF40Io8ewDQvlE3rlInw9mlQjoUpUK47V3thrqX3-dei990.png)

3. Select “SDK Manager”, 

   1. Under “SDK Platforms” Make sure at least Android 9 and 10 are selected. You can check more popular ones if you have good network speed. Or do it later after class.

   <img src="img/HqoOnkOFj0KbiEiVn8gjfNW9-0evdFm619Xt_8d2hbG3wRQzWRUer4llm58UQSsytTM_NTlYiLkJLfYj4Gx-WtHgFN0TL09xbjCo2-gTbM59iDYG0nndHfAswDJuMp_pW60ks2KT.png" alt="img" style="zoom:200%;" />

   2. Under “SDK Tools”, make sure what I have in the screenshots are ALL selected. 

   <img src="img/s6mJtH48vJKEuQTljn_xGZssSQjWkeFcP1G13QV-3iCmkQ83u2LEJq7BLkqg0y1vLOhsES7ZffUNykeqW0Y0dlZJhtV2I8HVXFFRaVqQ6pOiiP_szpTX3iLOnbFeSgKUnMBGnkkS.png" alt="img" style="zoom:200%;" />

   > Note: Running Android on your desktop is really slow without hardware acceleration. Intel machine users make sure the HAXM option at the bottom of the above screen is checked and installed. AMD users please follow instructions [here](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html) to enable Hyper-V)

   3. Click “OK” or “Apply”.You may need to accept terms and conditions etc.

4. Select "AVD Images".

   1. "Create virtual device"

   <img src="img/RHIZlCyz3LpVwqTDv6ANTxL63YdYWYeN3Wvc8w1uSH29Eo__O6S1TTexSOp_RQtoec9pQOi-5fHbcpTXBQ1CKuk3rarNrc06zWeAhUhcZbNjDVUH-_j1CulaSbk3I6aY_4AzRqLR.png" alt="img" style="zoom:200%;" />

   2. Select “Pixel 3”, with Google Play Store

   <img src="img/kQf5hNm7HwodceMDBEQqoB3XXIWtxcfBMqj4yGexR3Y2e0FJaMXQWZv4bVva6PkQsO5siHoaHmbAO0OGh7gVOO0M0yHHJjG-YCk-qRstC0Zf9iwltq8VA6RfOblwMa1WMKu1U4NW.png" alt="img" style="zoom:200%;" />

   3. In the next “Select Image” page, download Android “Q” Image, and click “Next” leave everything default.

   <img src="img/l4aFAcjIXSJaaFlRX_UHqSQCEBM954vo9TM-oEIypzRKf3dIZvgp-fDH5iBQOl9mlJlZCJvhH-gw484p-leQ-RpnGuKdJLX8BM1QAKEneh6Q0BZznKddsC31sTzaZIybyfxiUqYp.png" alt="img" style="zoom:200%;" />

## GOAL

1. What we cover today:
   * Android Introduction
   * Android Studio and Emulator setup
   * First Android App “Hello Laioffer”

2. What is Android?
   * Linux based OS, Java/Kotlin/JVM framework. 
   * It was acquired by Google, founded by Andy Rubin
   * Version history, desert naming convention (https://en.wikipedia.org/wiki/Android_version_history)
   * Most popular Smartphone OS by volume
   * Extended to wearables, Smart speaker, in-car entertainment. (Portable Device, Smart Device, Smart Home, Auto App)

3. Android vs iOS
   * Lower learning curve
   * Higher demand
   * iOS is more restrictive, $99 to run on device, dedicated Mac

4. Typical Android UI:

   ​	https://material.io/components/

<img src="img/nSHhaQ4AuIegqHjV5rsia9dQ3YmyGunZo7PF1B_ioVINqEPUB263-UF-D0K5H2CK_qHpX16B8gYcVtKT71vXU2DG8XQyg8kyU7kCskvwY9BRm6D4-Yc6t5WZuQttnEMgx2xVio90.png" alt="img" style="zoom:200%;" />

5. Android Architecture

   ​	https://developer.android.com/guide/platform/ 

<img src="img/Lab0oE9vdMz32jryjnOr85wHgVjj4uvbMocB_qq9UTtgPaKD4ibiFvsfWrjSTlNwJXyP1BoE8yBBEi3mWcz-41tmeZ2zM8dyVhAmwhzGZItpdU7fGbtHwEokMWGh3WKPRyG2veQy.png" alt="img" style="zoom:200%;" />

6. Why learning Android
   * Wide requirements from Companies, like Amazon, Google, Snapchat, etc
   * Wide requirements for jobs, SDE, QA, SDET, UX, Hardware Developer, etc
   * Wide requirements in the future, for example, device related machine learning skill

<img src="img/xLZT21D5udrxQiIXcfteZ44nD0zYoK_NHxzF8F5Clkb0IPIjELYTOhjotMTD6INBJpSpqxIIloz82uCSgXDJm5Wpq9C_EaaK1El9HTvmiwS-JNS0dpYaG_mmAb7WjyOHzLCHQ-Re.png" alt="img" style="zoom:200%;" />

<img src="img/cNYlEokswvAKvIzBV0-6sIb5o1tescjfRsiCTnN8HcAmudk-arLj5Ll1i5tixMti8ZxGtEalf5aiCv6Ed7OQvNp8fy0oV0yfvYZGxIS7sXgm9i3L7V4tpUrw7TQzAqZPyOLWVuE7-20200229101605025.png" alt="img" style="zoom:200%;" />

<img src="img/R-TaYRoLjIp2cwE9bIhzhHoKmw0wqzBGKhCQdTl-R7B6-45LG5bHqbl8BNs5toN267b1ErBarjL_2MMW0KX63RyEzj3CLCLPc4PJhAN-VAcIRJF-aTFN31j_BMsW4eBre2AdtS5x.png" alt="img" style="zoom:200%;" />

<img src="img/a-r-dTWGaxyNm5NVsTt3rujOIKQUp_6GfaG8nf7YpFQx0wSN-m3mn1nYryjPy3EHcrTsIfWUmFSa0bhwlI6ng3I8iRjYtGpMbVMbr2yvvcndLnmWaciijibXTBNetD1Fvi8fXv-r.png" alt="img" style="zoom:200%;" />

7. Android Interview
   * Java basic knowledge
   * Algorithm and data structure
   * Design(OOD, system design
   * Android basic knowledge: Typical questions: What are the options to fetch data from network? What are the Activity/Fragment life cycles? How do you debug and profile? 
   * Live coding, a simple Android app.

8. Project Overview

**Smart+: LBS based Android App for smart driving**

 Developed an **Android** App for users to exchange the nearby real-time events with **Google Firebase Platform**.

* Integrated a **Google Map View** within MapFragment to display the events such as speeding, parking, traffic lights and etc

* Used the **Google Firebase Realtime Database** to save the client-post event detail (comments /images/ descriptions/ geos) for better data synchronization 

* Implemented the event-trigger **Firebase Message System** with **Google Cloud Functions** to broadcast notifications to users 

* Developed the UI with standard widgets such as **RecyclerView**, **ViewPager**, **DrawerLayout**, **Dialog** and tested several core flows with **Espresso**

* Enhanced the user data security by using **MD5 encryption** and **Google Firebase Authentication**

  

Built an in-app simple voice control by using **Google Speech Recognition** to support hand free event report



Matrix[ demo](https://drive.google.com/file/d/0B9CYsYYZ9IGrbmhFZkJKdDNVTTd3TWZfOVNYQlhWZ2tYQVFB/view?usp=sharing)

9. Create your first Android App

   1. Launch the Android Studio -> **Start a Android Studio Project**

   <img src="img/tvr-d4t79gECypLkVWdfpBm_-RHOTh_Fl3B26XiOqCcWNLBOvUG-gexc0Kp9bUzibyS587c1x7JNbbtDIDIpQhd6tWAsXp5ODGZB_giB1UBAp5I7bkq5ISTtGEtBr-yLubXWYugu.png" alt="img" style="zoom:200%;" />

   2. Choose your project and pick the Empty Activity

<img src="img/UsHUr7qefsVyRgFvFBOSOATmhlp6smLBl_PGy9W_roSh2iSjW8XRR6nU4X6jpazbdrnLbDLB7s8xOUJU4CwIXc_v_bEWcgEBMf-O_Qfyle9WnIdFvWZEZILKkVYbi8eJifl-m05D.png" alt="img" style="zoom:200%;" />

<img src="img/StRiHkeov4oChswutBE7BHTC00LTXAm5WqC3KVqga4TtbFC6l67HWAGZUDZLj2kBTojOLOg63eIuGEkKzgl9HTvsXBamsADQlIbIr4epirASfwe3wM6jfTReRMxS-w7uSp3HvSli.png" alt="img" style="zoom:200%;" />

**Name**: Matrix
**Package** **Name**: com.laioffer.matrix
**Language**: Java
**Minimum API**: 21
**Use androidX.\***: checked



Minimum Android Version. The Minimum Android version (also known as minSdkVersion ) is the oldest version of the Android OS (i.e., the lowest API level) that can install and run your application.



5.1. Project is all set!

<img src="img/YtmnidysCabBCNQ_M9YuwSD6rHoFq2MXjLrwRCxKQ3sKhK03yf5LnD9VrS7nheJhMQrbYCdD1vuY_3_HCDqZsYTJmtO_8PSZlHql-ScoW66ugLc6BHWKsVPkGSUTGD-xC5FpYT5t.png" alt="img" style="zoom:200%;" />

In the top left project panel, switch from “Android” to “Project”. Android view groups everything together, and hide away what a project is truly organized, which is important for beginners. 



<img src="img/u_U7FTdatiUZpnOMduq-M_-EsY1i8JrWK7VTCAvV4ZxwD5sv2qbBvZsTWo_n-QG5h4QO8YbUHukgQv1CzaSo-cVX5L5Ay8u3gdP_Ml4w_rs6O89k1yt7Pg8kkwWPRIccXnoSA9ly.png" alt="img" style="zoom:200%;" />

**Do not copy & paste the following code, the project has generated for you already.**



5.2. Project level build.gradle(Project: matrix)

```gradle
// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
   repositories {
       google()
       jcenter()
      
   }
   dependencies {
       classpath 'com.android.tools.build:gradle:3.5.3'
      
       // NOTE: Do not place your application dependencies here; they belong
       // in the individual module build.gradle files
   }
}

allprojects {
   repositories {
       google()
       jcenter()
      
   }
}

task clean(type: Delete) {
   delete rootProject.buildDir
}
```



App level build.gradle(Module:app)

```gradle

apply plugin: 'com.android.application'

android {
   compileSdkVersion 29
   buildToolsVersion "29.0.2"
   defaultConfig {
       applicationId "com.laioffer.matrix"
       minSdkVersion 21
       targetSdkVersion 29
       versionCode 1
       versionName "1.0"
       testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
   }
   buildTypes {
       release {
           minifyEnabled false
           proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
       }
   }
}

dependencies {
   implementation fileTree(dir: 'libs', include: ['*.jar'])
   implementation 'androidx.appcompat:appcompat:1.1.0'
   implementation 'androidx.constraintlayout:constraintlayout:1.1.3'
   testImplementation 'junit:junit:4.12'
   androidTestImplementation 'androidx.test.ext:junit:1.1.0'
   androidTestImplementation 'androidx.test.espresso:espresso-core:3.2.0'
}

```

6. Set up Emulator(if you haven’t done so)

   1. Click AVD Manager: Android Virtual Device (AVD) and Create Virtual Device

   <img src="img/iBZtzLgK-6MPWQByn7p2I8sMAEg357h6KMIsEX1KZ63_dtpX-PInZVEnril94bzjyCgdSYyfOO3PqAa6J3XPHPJ-h9u8WQK-HOYQlZjdUpdOXNBLge9Z00ZVYkH9a1psPsETBLAH.png" alt="img" style="zoom:200%;" />

   https://developer.android.com/studio/run/managing-avds 

   2. Choose any Device Definition (Pixel 3) and **Next**

   <img src="img/0fz660a1AuNVA5u6E__NMkuCFpzkBpIUBKPnf2HJaC-E2SnLBy2hw2Bp9iFljoYY0Ty2Qxq9dmE-dUAwaXP_YldXJg3YonGXy7OxE4dO-5uVz0TqXmkhh96BUKykBE15hE1Gxnqk-20200229102839142.png" alt="img" style="zoom:200%;" />

   3. Pick System Image: The first one. “**Recommended**”, Release name **Q**, API **29,** with **Play Store.** and **Next.** You need to download the image if it’s grayed out.

   <img src="img/lkrZc3jCjLK8kOLMfFdsRVVaT_3jgcRNYNizjqIOhICvx-U3PwxdyH9ERQbi12LWO8dppYu3BuN3SMVDwkx4opisDf5ELq93qhegybPI2uZtO6TAVBwgNCKpNOmgVI0kLnVqUP7g.png" alt="img" style="zoom:200%;" />

   4. Leave everything default, and hit “**Finish**” 

   <img src="img/5m0T8R9N8P7-zq1ik0vuwfrLE387jmCtR_xKndgr7yjBtFwfHPRp4-bfvAx-ptu9bIu9ij85aq9MyIndEoBypkCftoMqXct9Webi2cnMqXuXzsNXwoGpGdg3w3pOI7kKvI8cCBMd.png" alt="img" style="zoom:200%;" />

   5. Now new virtual device gets added to the AVD Manager

   <img src="img/GUdLxSPSvUpxQOVclPYqyzqqH-CsOTHZbwPuk_ADdxYvBn9iZqVaPUkFWVsG9k6tnubvW3S6NdEEhGZtJu2NAsSntiyvANUZhQG4zc2Edj15ONpB-9tS5W_OwMWGpgawGL1roHyV-20200229103019738.png" alt="img" style="zoom:200%;" />

   6. We could start our emulator in two ways

   

   Run Button: ![img](img/G2KM2lfmrcpS0rjO-nZHOIu6JMYg2f7HIAUXIafmOeMVpZnWRLP4sWQ2eVFuk8uoSOipzRg4_45pLJR0wDJXNZDF-ZbvC2z5yQyc1H87TfldPrPITU69lSQ4W0FZ6-EBiXulimn9.png)
   				

   * Click **Run Button** Under **AVD Manager** (it won’t load the app into the device)

<img src="img/Mi-b6zQR3hs-GWAZ-GraSVQNlq_BIOP5x7cds4mpjDY1mTJFaWSDEdQIYV9HsvUG4M-LsD3Zvm8Aupv0936-3Bt94AP3aERZpt2BOaPYXnB5FVmNNfE3M3T4zAgIsshKwR9IudsP.png" alt="img" style="zoom:200%;" />

* Run Button On The Root IDE Panel and choose the device you created and **OK** (it will load the app into device)

<img src="img/O4GAHwpVJXyGoVSuplstwPf5zHPRunu4our9jqCkdu4n__DjxV6Zye_jjlldcPybU5KDCZz-gZIf2alCFnVUTMRQtBtNwezkqB-ep_5Yq1Iq9w3qz6g7ZmIcLrEWeR8dQBruuQqc.png" alt="img" style="zoom:200%;" />



   7. Hello World

<img src="img/zefUnp5kVSkKoitzM_aNYKxzBVnM3IX4lWHk5tC9TEMqe2uxxeFysP7kZGm-RKdFJqRk6x8XGiKr8KmAgJqZqO8c36rIP7TG3P8J2oQBen8KcmeFqqa-PGMG12unTfE71BoEKAnq.png" alt="img" style="zoom:200%;" />



7. Understand Android Studio

   1. Take a look at the Android Working Panel
      https://developer.android.com/guide/components/fundamentals 

      **app/manifests/AndroidManifest.xml**

      Before the Android system can start an app component, **the system must know that the component exists by reading the app's manifest file**, AndroidManifest.xml. Your app must declare all its components in this file, which must be at the root of the app project directory.

      https://developer.android.com/guide/components/fundamentals 
      https://stackoverflow.com/questions/25219551/what-is-the-meaning-of-android-intent-action-main

      **app/java/**
      Main folder that contains java source file, java files are mainly focused on logic purposes

      **AndroidTest**: for instrumental test
      **Test**: Unit test
      **Normal**: Project java code (MainActivity sits here)

      **app/java/res/**

      Resources are the additional files and static content that your code uses, such as bitmaps, layout definitions, user interface strings, animation instructions, and more.
      https://developer.android.com/guide/topics/resources/providing-resources 
      Drawable: Images https://developer.android.com/reference/android/graphics/drawable/Drawable 
      Layout: layout defines the structure for a user interface in your app, such as in an activity
      https://developer.android.com/guide/topics/ui/declaring-layout 
      Values: static resources definition such as color, string
      https://developer.android.com/guide/topics/resources/available-resources 

      **app/build.gradle**
      Build configuration file, Google uses gradle as their build tool.Some configuration artifacts, 
      compiledSdkVersion is the platform version against which you will compile your app.
      minSdkVersion is the earliest version of the Android SDK that your app supports.
      targetSdkVersion indicates the highest version of Android with which you have tested  your application. 

      

8. Let’s play around with the app
   
   1. Change Text "Hello World" to others and color

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
   xmlns:app="http://schemas.android.com/apk/res-auto"
   xmlns:tools="http://schemas.android.com/tools"
   android:layout_width="match_parent"
   android:layout_height="match_parent"
   tools:context=".MainActivity">

   <TextView
       android:layout_width="wrap_content"
       android:layout_height="wrap_content"
       android:text="Hello World!"
       android:textColor="#fff123"
       app:layout_constraintBottom_toBottomOf="parent"
       app:layout_constraintLeft_toLeftOf="parent"
       app:layout_constraintRight_toRightOf="parent"
       app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```



2. Define a new String in Strings.xml

```xml
<resources>
   <string name="app_name">Matrix</string>
   <string name="country">America</string>
</resources>
```

3. Define a the string file for differnt country

   

<img src="img/nf7oW2zk2jzHDE8JnCLnHWvU5SacuUHQzSQxoAstL790XGb3lmcH7mtb8-ixmNbKSFKHDgglolGLCiHcDArQ24Jh-BK_n1Bk9oG2xIO0OzI0Zl6V-ogT-ArorkZlGqbflJC_5yfG.png" alt="img" style="zoom:200%;" />

<img src="img/8sIJfxwKM1u_Lf79FRSPHv91fUkaGUK91Ruj8XcIaTfDO9hqjRyz7H1ox7B373Gkej6AEAO3pj2fuIjkf0cxoPP1n-rcVw1YJ5gJBRYhNh7nQWVN4-sdbwlFdb4VO6hGC928fGPN.png" alt="img" style="zoom:200%;" />

Edit new strings.xml(zh-rCN) 

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
   <string name="app_name">Matrix</string>
   <string name="country">中国</string>
</resources>
```

4. Replace “hello world” to @string/country and run

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
   xmlns:app="http://schemas.android.com/apk/res-auto"
   xmlns:tools="http://schemas.android.com/tools"
   android:layout_width="match_parent"
   android:layout_height="match_parent"
   tools:context=".MainActivity">

   <TextView
       android:layout_width="wrap_content"
       android:layout_height="wrap_content"
       android:text="@string/country"
       android:textColor="#fff123"
       app:layout_constraintBottom_toBottomOf="parent"
       app:layout_constraintLeft_toLeftOf="parent"
       app:layout_constraintRight_toRightOf="parent"
       app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

Go to Settings -> System -> Languages & input -> Languages -> Choose 简体中文 and move it to the top. See the change of the text of the Matrix app

<img src="img/RW5mGFXfgyAryTKJrMiwDuejiTKPk2AbMNpSdJUlubL7J-qiX3IfB_lRcgCfpOBDMbWg0psp4NTfdjpECC-Nd45wF-gJ6L6e7ALdcfVG0dX7vZNC5ktlzRUwOSpPXsV4avfgAXfm.png" alt="img" style="zoom:200%;" />

<img src="img/94P5vGA_AR-aYnxYOw2agk5_M-PnQK7jJepxv3wcxC6VSmuxwYazAeG4yoM9wqjzL9iQAjk_uwAErCfXWpnMrg8MaLMNTE3vFMclAFjUNN23PkMm5vbuN7ki-NpedUD3ia8XN-1B.png" alt="img" style="zoom:200%;" />

<img src="img/2VzCUJp4z8zFmpsgg2nJ6KVezXjovV-02QFaeax21AIMs7BAcFZqDqpV1S-uimmjRRdgQq9HZuZwKaWs1nBVW20pyokxxNE5y9FGCU-g6cZ4hJ5tg99wVwheYo_GW281Kievgql3.png" alt="img" style="zoom:200%;" />

<img src="img/RZyerJsGcWycekgzK6dOfuovJgMX4dDg2y8DMiBETrBGCu8Fc0jIBWpB4bS0NnDIgIfW1U53Ob-aJduQ95IIQAxrQRvFyIyeXqUo1hvDp2U3AvYQGaXD5awR7Eqx-jGez5xlt20o.png" alt="img" style="zoom:200%;" />

9. Basic Concept

App Components

* Activities
* Services
* Broadcast receivers
* Content providers

Reading materials: https://developer.android.com/guide/components/fundamentals#ComponentsAndroid 

Developer Youtube Channel:https://www.youtube.com/user/androiddevelopers

ADBhttps://developer.android.com/studio/command-line/adb

Homework:

Must know: NPE(Billion dollar mistake), ANR, NDK, SDK, AVD

Optional: JNI, JDK