/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { ConnectKitProvider } from "connectkit";
import { WagmiConfig } from "wagmi";
import { config } from "./wagmi";
import { PriceContextProvider } from "./context/priceContext";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
const store = createStore(rootReducer, composeWithDevTools());
startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <Provider store={store}>
        <WagmiConfig config={config}>
          <PriceContextProvider>
            <ConnectKitProvider
              onConnect={async (kit: any) => {
     

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append(
                  "Authorization",
                  "Bearer " +
                    localStorage.getItem("token")?.replace(/['"]+/g, "")
                );
                var raw = JSON.stringify({
                  wallet: kit.address,
                });

                var requestOptions: any = {
                  method: "POST",
                  headers: myHeaders,
                  body: raw,
                  redirect: "follow",
                };

                fetch(
                  "https://api.maxiruby.com/api/users/auth/wallet",
                  requestOptions
                )
                  .then((response) => response.text())
                  .then((result) => console.log(result))
                  .catch((error) => console.log("error", error));
              }}
            >
              <RemixBrowser />
            </ConnectKitProvider>
          </PriceContextProvider>
        </WagmiConfig>
      </Provider>
    </StrictMode>
  );
});
