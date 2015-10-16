import React from "../node_modules/react/react";
import Docs from './components/docs/Docs';


// Component Tree
// ===========================================

// - Docs
//   -- Sidebar
//      -- SBLink
//
//   -- List
//   	-- MixinTab 


React.render(
 	<Docs/>,
    document.getElementById('documentation')
);
