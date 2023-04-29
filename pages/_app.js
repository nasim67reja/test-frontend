import "../styles/globals.css";
import "../styles/buy.css";
import "../styles/payment.css";

import { Provider } from "react-redux";
import { wrapper } from "../store/store";
// import { wrapper } from "../store";
import { productsActions } from "../store/productSlice";
import axios from "axios";
import { URL } from "../components/Reuses/URL";

// _app.js file

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}

App.getInitialProps = wrapper.getInitialAppProps(
  ({ dispatch }) =>
    async ({ Component, ctx }) => {
      // const data = { id: 1, name: "demo" };
      // const res = await axios.get(`https://api.spacexdata.com/v3/launches`);
      // const data = res.data;
      // dispatch(setUser(data));

      const res2 = await axios.get(`${URL}/api/v1/product/all`);
      const data2 = res2.data;

      dispatch(productsActions.storeProducts(data2));

      if (!ctx.req) {
        return {
          pageProps: {
            ...(Component.getInitialProps
              ? (await Component.getInitialProps(ctx))?.initialProps ||
                (await Component.getInitialProps(ctx))
              : {}),
            pathname: ctx.pathname,
          },
        };
      }

      try {
        return {
          pageProps: {
            ...(Component.getInitialProps
              ? (await Component.getInitialProps(ctx)).initialProps ||
                (await Component.getInitialProps(ctx))
              : {}),
            pathname: ctx.pathname,
          },
        };
      } catch (error) {
        if (ctx.res) {
          // server
          ctx.res.writeHead(302, {
            Location: "/404",
          });
          ctx.res.end();
        } else {
          // client
          // Router.push('/404');
        }
        return;
        // ctx.res.statusCode = 404;
        // ctx.res.end("Not found");
        // return;
      }
    }
);

// export default wrapper.withRedux(MyApp);
// const [isLoading, setIsLoading] = useState(true);

// const loadingfunc = () => {
//   setIsLoading(false);
// };

// setTimeout(loadingfunc, 1000);

// return isLoading === false ? (
//   <>
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   </>
// ) : (
//   <div className="loading-page">
//     <Image
//       src={"/loading.gif"}
//       alt="loading_image"
//       height={200}
//       width={200}
//       unoptimized
//     />
//   </div>
// );
// MyApp.getInitialProps = async (AppContext) => {
//   // const { ctx } = AppContext;
//   // ctx.makeStore.dispatch(productsActions.storeProducts(bigData));
//   try {
//     const res = await axios.get(`${URL}/api/v1/products`);
//     const data = res.data;
//     // console.log("fetched Data:", data);
//     makeStore.dispatch(productsActions.storeProducts(data));
//     // store.dispatch(productsActions.storeProducts(data));
//     console.log(data);

//     return { data };
//   } catch (error) {
//     // console.log(error);
//     return { data: error };
//   }
// };

// export default wrapper.withRedux(MyApp);
