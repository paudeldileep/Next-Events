import "tailwindcss/tailwind.css";
import Head from 'next/head'
import CustomLayout from "../components/layout/CustomLayout";

function MyApp({ Component, pageProps }) {
  // //check network connection
  // function getOnlineStatus() {
  //   return typeof navigator !== "undefined" &&
  //     typeof navigator.onLine === "boolean"
  //     ? navigator.onLine
  //     : true;
  // }
  // const [onlineStatus, setOnlineStatus] = useState(getOnlineStatus());

  // const goOnline = () => setOnlineStatus(true);

  // const goOffline = () => setOnlineStatus(false);

  // useEffect(() => {
  //   window.addEventListener("online", goOnline);
  //   window.addEventListener("offline", goOffline);

  //   return () => {
  //     window.removeEventListener("online", goOnline);
  //     window.removeEventListener("offline", goOffline);
  //   };
  // }, []);

  // if (!onlineStatus) {
  //   return <InternetError />;
  // }

  return (
    <CustomLayout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content="Simple Events Finder application using React.js,Next.js,tailwind css and MongoDB"></meta>
        <meta name="keywords" content="Reactjs, Nextjs, tailwind css, beginners app,server side rendering, current events"></meta>
      </Head>
      <Component {...pageProps} />
    </CustomLayout>
  );
}

export default MyApp;
