import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { FreeTier } from "./components/free-tier";
import { PlusTrier } from "./components/plus-tier";
import { ProTier } from "./components/pro-tier";
import "./App.css";

function App() {
     return (
          <section className="pricing py-5">
               <div className="container">
                    <div className="row">
                         <FreeTier />
                         <PlusTrier />
                         <ProTier />
                    </div>
               </div>
          </section>
     );
}

export default App;
