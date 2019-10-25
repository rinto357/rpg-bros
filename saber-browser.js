// @ points to current working directory
import "@/styles/main.styl";

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
