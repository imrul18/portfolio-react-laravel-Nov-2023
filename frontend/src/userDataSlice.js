// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "./config";

export const getAllData = createAsyncThunk("userData/getAllData", async () => {
  const response = await axios.get(baseUrl + "/user-data");
  return response.data;
});

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    home: {
      name: "Imrul Afnan",
      roles: ["a Developer", "a Freelancer", "a Student", "a Learner"],
    },
    education: [
      {
        title: "Jun 20XX - Jun 20YY",
        cardTitle: "B.Tech, Computer Science",
        cardSubtitle: "XYZ University, City",
        cardDetailedText: "CGPA - 9.5",
        icon: {
          src: "images/education/lorem-ipsum.png",
        },
      },
      {
        title: "Jun 20XX - Jun 20YY",
        cardTitle: "High School",
        cardSubtitle: "ABC School, City",
        cardDetailedText: "Marks - 95%",
        icon: {
          src: "images/education/lorem-ipsum.png",
        },
      },
      {
        title: "Jun 20XX - Jun 20YY",
        cardTitle: "High School",
        cardSubtitle: "ABC School, City",
        cardDetailedText: "Marks - 95%",
      },
      {
        title: "Jun 20XX - Jun 20YY",
        cardTitle: "B.Tech, Computer Science",
        cardSubtitle: "XYZ University, City",
        cardDetailedText: "CGPA - 9.5",
        icon: {
          src: "images/education/lorem-ipsum.png",
        },
      },
    ],
    skills: {
      intro:
        "I love to learn new things and experiment with new technologies.\nThese are some of the major languages, technologies, tools and platforms I have worked with:",
      skills: [
        {
          title: "Languages & Databases",
          items: [
            {
              icon: "images/skills/java.png",
              title: "Java Afnan",
            },
            {
              icon: "images/skills/php.png",
              title: "PHP",
            },
            {
              icon: "images/skills/js.png",
              title: "JavaScript",
            },
            {
              icon: "images/skills/python.png",
              title: "Python",
            },
            {
              icon: "images/skills/mysql.png",
              title: "MySQL",
            },
          ],
        },
        {
          title: "Frameworks & Technologies",
          items: [
            {
              icon: "images/skills/android_new.png",
              title: "Android",
            },
            {
              icon: "images/skills/react.png",
              title: "React",
            },
            {
              icon: "images/skills/nodejs.png",
              title: "Nodejs",
            },
          ],
        },
        {
          title: "Tools & Platforms",
          items: [
            {
              icon: "images/skills/android-studio.png",
              title: "Android Studio",
            },
            {
              icon: "images/skills/git.png",
              title: "Git",
            },
            {
              icon: "images/skills/docker.png",
              title: "Docker",
            },
          ],
        },
      ],
    },
    about: {
      about:
        " This Afnan is where you can describe about **yourself**. The more you describe about yourself, the better it is!\n\n\nExtra Information about you, like hobbies and your goals.\nExample Paragraph: I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work. For example, I taught myself how to use Photoshop to improve the quality of our photos and graphics. I soon became the go-to person for any design needs.",
      imageSource: "images/about/profile.png",
    },
    experience: [
      {
        title: "Software Engineer",
        subtitle: "XYZ Ltd",
        workType: "Full-time",
        workDescription: [
          "Integrated **2** new product.",
          "Worked on adding **def** to **bcd**. Improved speed by 50%.",
        ],
        dateText: "06/20XX – Present",
      },
      {
        title: "Software Engineer",
        subtitle: "XYZ Ltd",
        workType: "Internship",
        workDescription: ["Worked on abc."],
        dateText: "01/20XX – 05/20XX",
      },
      {
        title: "App Developer",
        subtitle: "ABC Pvt Ltd",
        workType: "Freelance",
        workDescription: [
          "Developed the official apps for the startup for both Android and iOS using hybrid framework.",
          "Done bcd work.",
        ],
        dateText: "09/20XX – 01/20YY",
      },
    ],
    projects: [
      {
        image: "images/projects/caaring-poster.png",
        title: "Caaring -  Cab Share App",
        bodyText:
          "- A Cab Sharing web app made using **Django** for **VIT** Students. People can create a new cab or request to join an existing cab.\n - Added User authentication and password reset using **SendGrid**.\n - Deployed on **heroku** using **gunicorn**.",
        links: [
          {
            text: "GitHub",
            href: "https://github.com/mayankagarwal09/Caaring",
          },
          {
            text: "Live",
            href: "http://caaring.herokuapp.com",
          },
        ],
        tags: [
          "Python",
          "Django",
          "BootStrap",
          "SendGrid",
          "Heroku",
          "Gunicorn",
          "VIT",
        ],
      },
      {
        image: "images/projects/caaring-poster.png",
        title: "Caaring -  Cab Share App",
        bodyText:
          "- A Cab Sharing web app made using **Django** for **VIT** Students. People can create a new cab or request to join an existing cab.\n - Added User authentication and password reset using **SendGrid**.\n - Deployed on **heroku** using **gunicorn**.",
        links: [
          {
            text: "GitHub",
            href: "https://github.com/mayankagarwal09/Caaring",
          },
          {
            text: "Live",
            href: "http://caaring.herokuapp.com",
          },
        ],
        tags: [
          "Python",
          "Django",
          "BootStrap",
          "SendGrid",
          "Heroku",
          "Gunicorn",
          "VIT",
        ],
      },
      {
        image: "images/projects/caaring-poster.png",
        title: "Caaring -  Cab Share App",
        bodyText:
          "- A Cab Sharing web app made using **Django** for **VIT** Students. People can create a new cab or request to join an existing cab.\n - Added User authentication and password reset using **SendGrid**.\n - Deployed on **heroku** using **gunicorn**.",
        links: [
          {
            text: "GitHub",
            href: "https://github.com/mayankagarwal09/Caaring",
          },
          {
            text: "Live",
            href: "http://caaring.herokuapp.com",
          },
        ],
        tags: [
          "Python",
          "Django",
          "BootStrap",
          "SendGrid",
          "Heroku",
          "Gunicorn",
          "VIT",
        ],
      },
    ],
    social: [
      {
        network: "linkedin",
        href: "https://linkedin.com/",
      },
      {
        network: "github",
        href: "https://github.com/imrul18",
      },
      {
        network: "email",
        href: "mailto:imrul.afnan18@gmail.com",
      },
      {
        network: "whatsapp",
        href: "http://imrul.xyz",
      },
    ],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});

export default userDataSlice.reducer;
