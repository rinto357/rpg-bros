// @ points to current working directory
import "@/css/global.css";

export default ({ setHead }) => {
  setHead({
    link: [
      {
        href: "https://fonts.googleapis.com/css?family=Roboto",
        rel: "stylesheet"
      }
    ]
  });
};
