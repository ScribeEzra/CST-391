<!-- Header -->
## **Activity 2**
### **Christa Moncrief**
### **CST - 391**
### **January 14, 2024**
### **Professor Bobby Estey**

---

<!-- Part 1 -->
### Screenshots
![Verified Angular](https://github.com/ScribeEzra/CST---391/blob/main/Media/Activity%202/01.png)
*Verified Angular Installation*

![Default Application](https://github.com/ScribeEzra/CST---391/blob/main/Media/Activity%202/02.png)
Default Application Apperance

![Changed Application](https://github.com/ScribeEzra/CST---391/blob/main/Media/Activity%202/03.png)
Changed Application Apperance

![Further Changes](https://github.com/ScribeEzra/CST---391/blob/main/Media/Activity%202/04.png)
Further Changes to Application Apperance

---

<!-- Part 2 -->
### Research
![File Layout](https://github.com/ScribeEzra/CST---391/blob/main/Media/Activity%202/FileLayout.png)
> Above, you can see the file structure for my default testapp project. 
> Searching through this layout, I cannot find node_modules anywhere so I can't study it and exlain what it's purpose is. Perhaps I skipped an installation step?
> src is the source folder which is used to organize the code files. Folders within this folder are used to package code files that relate to eachother.
> src/app contains all of the component files as well as configuration files for the app itself.
> src/assets contains a .gitkeep file which allows an empty folder to be tracked using a git.
> src/environments is missing from my folder layout, but I can easily assume it's used to hold the environment code files.
> angular.json is meant to hold the settings for angular. 
> app.component.css is used to define the CSS designs of the application.
> tsconfig.json is the configuration file for typescript. 

![InspectedPage](https://github.com/ScribeEzra/CST---391/blob/main/Media/Activity%202/InspectedPage.png)
> Above, you can see the results of inspecting the page. The displayed code is the index.html file that references the app-root. 
> app-root is the name of the selector in app.component.ts, which is where the title and message are sent from. 
> app.component is referenced in main.ts and this refers to app.component.html, app.component.css, and app.component.ts.
> These three files work together to build a webpage. I can't find app.module.ts anywhere so I assume it has to do with node_modules,
> which I had previously mentioned is missing as well. 